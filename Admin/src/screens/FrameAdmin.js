import React, { useState, useEffect } from 'react'
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Select from "react-select";

import axios from "axios";
import { useDropzone } from "react-dropzone";
import "bootstrap/dist/css/bootstrap.min.css";
import { useDispatch, useSelector } from "react-redux";

const styles = {
    formContainer: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        maxWidth: "500px",
        margin: "0 auto",
        padding: "20px",
        borderRadius: "5px",
        boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
        backgroundColor: "#f9f9f9",
    },
    formGroup: {
        marginBottom: "15px",
        width: "100%",
    },
    label: {
        display: "block",
        marginBottom: "5px",
    },
    input: {
        width: "100%",
        padding: "5px",
        borderRadius: "3px",
        border: "1px solid #ccc",
    },
    textarea: {
        width: "100%",
        padding: "5px",
        borderRadius: "3px",
        border: "1px solid #ccc",
        minHeight: "100px",
    },
    select: {
        width: "100%",
        padding: "5px",
        borderRadius: "3px",
        border: "1px solid #ccc",
    },
    dropzone: {
        width: "100%",
        padding: "10px",
        textAlign: "center",
        border: "2px dashed #ccc",
        borderRadius: "3px",
        cursor: "pointer",
    },
    submitButton: {
        marginTop: "15px",
        padding: "10px",
        borderRadius: "3px",
        backgroundColor: "#007BFF",
        color: "#fff",
        border: "none",
        cursor: "pointer",
        fontSize: "16px",
    },
};
const options = [
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2" },
    { value: "option3", label: "Option 3" },
];

const customOption = (inputValue) => ({
    value: inputValue,
    label: `Add "${inputValue}"`,
    isAddOption: true,
});
const FrameAdmin = () => {
    const dispatch = useDispatch();
    const UserLogin = useSelector((state) => state.UserLogin);
    const [Image, setImage] = useState("");
    const [layer, setLayer] = useState(false);
    const [materialOptions, setMaterialOptions] = useState();
    const [typeOptions, settypeOptions] = useState();
    const [toggle, setToggle] = useState(false);
    const [uploading, setUploading] = useState(false);
    const [color, setColor] = useState("#000000");

    const [edit, setEdit] = useState(false);
    const [id, setId] = useState()
    const [formData, setFormData] = useState({
        title: "",
        description: "",
        type: "Classic",
        material: "Wooden",
        color: '#0000',
        price: null,
        image: null,
        multiLayer: false,
    });
    const [frames, setframes] = useState([]);
    const [selectedOption, setSelectedOption] = useState(null);
    const { userInfo } = UserLogin;

    const handleInputChangeSelect = (inputValue, { action }) => {
        if (action === "input-change" && inputValue) {
            setSelectedOption(customOption(inputValue));
        } else if (selectedOption?.isAddOption) {
            setSelectedOption(null);
        }
    };

    const handleOptionSelect = (option) => {
        if (option?.isAddOption) {

        } else {
            setSelectedOption(option);
        }
    };

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
        console.log(formData, layer);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!edit) {
            try {
                await axios.post("/api/frame/create", { ...formData, multiLayer: layer });
                setToggle(!toggle)

                alert("Frame uploaded successfully!");
                setFormData({
                    title: "",
                    description: "",
                    type: "Classic",
                    material: "Wooden",
                    image: null,
                    color: null,
                    price: null,
                    multiLayer: false,
                });

            } catch (error) {
                console.error("Error uploading frame:", error);
                alert("Error uploading frame.");
            }

        }
        else {
            try {
                await axios.put(`/api/frame/${id}`, { ...formData, multiLayer: layer });
                setToggle(!toggle)

                alert("Frame Edit successfully!");
                setFormData({
                    title: "",
                    description: "",
                    type: "Classic",
                    material: "Wooden",
                    color: null,
                    image: null,
                    price: null,
                    multiLayer: false,
                });
                setEdit(false)
            } catch (error) {
                console.error("Error uploading frame:", error);
                alert("Error uploading frame.");
            }
        }
    };
    const postDetails = (e) => {
        if (
            e.target.files[0].type === "image/jpeg" ||
            e.target.files[0].type === "image/png"
        ) {
            setUploading(true); // set uploading state to true
            const data = new FormData();
            data.append("file", e.target.files[0]);
            data.append("upload_preset", "notesapp");
            data.append("cloud_name", "dipcjbjho");
            fetch("https://api.cloudinary.com/v1_1/dipcjbjho/image/upload", {
                method: "post",
                body: data,
            })
                .then((res) => res.json())
                .then((data) => {

                    setImage(data.url.toString());
                    setFormData((prevState) => ({
                        ...prevState,
                        image: data.url.toString(),
                    }));
                    console.log(formData);

                    setUploading(false); // set uploading state back to false
                })
                .catch((err) => {
                    console.log(err);
                    setUploading(false); // set uploading state back to false
                });
        } else {
            // return setPicMessage("Please Select an Image");
        }
    };
    const getFrames = async () => {
        try {
            const { data } = await axios.get("/api/frame/all");
            const { data: dataTwo } = await axios.get("/api/frame/filters");
            setMaterialOptions(dataTwo.materials)
            settypeOptions(dataTwo.types)
            console.log(typeOptions, materialOptions, dataTwo);
            setframes(data);
        } catch (error) {
            console.error("Error uploading frame:", error);
        }
    };
    const deleteFrame = async (id) => {
        setEdit(false)
        try {
            const { data } = await axios.delete(`/api/frame/${id}`);
            setToggle(!toggle)

        } catch (error) {
            console.error("Error uploading frame:", error);
        }
    };
    const editFrame = async (id) => {
        window.scroll(0, 0)
        setId(id)
        setEdit(true)
        try {
            const { data } = await axios.get(`/api/frame/${id}`);
            setFormData({
                title: data.title,
                description: data.description,
                type: data.type,
                material: data.material,
                image: data.image,
                price: data.price,
                multiLayer: data.multiLayer,
            });

        } catch (error) {
            console.error("Error uploading frame:", error);
        }
    };
    const handleInputColorChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
        if (name === "color") {
            setColor(value);
        }
    };
    useEffect(() => {
        getFrames();
    }, [toggle]);
    return (
        <div>
            <Link to={'/inquires'}>Check Inquiries</Link>
            <div className="admin__panel">
                <h1>Admin Pannel</h1>
                <div className="upload__frame">
                    <form onSubmit={handleSubmit} style={styles.formContainer}>
                        <div style={styles.formGroup}>
                            <label htmlFor="title" style={styles.label}>
                                Title
                            </label>
                            <input
                                type="text"
                                name="title"
                                id="title"
                                value={formData.title}
                                onChange={handleInputChange}
                                required
                                style={styles.input}
                            />
                        </div>
                        <div style={styles.formGroup}>
                            <label htmlFor="description" style={styles.label}>
                                Description
                            </label>
                            <textarea
                                name="description"
                                id="description"
                                value={formData.description}
                                onChange={handleInputChange}
                                required
                                style={styles.textarea}
                            />
                        </div>



                        <div style={styles.formGroup}>
                            <label htmlFor="type" style={styles.label}>
                                Price
                            </label>
                            <input
                                type="number"
                                name="price"
                                id="price"
                                value={formData.price}
                                onChange={handleInputChange}
                                required
                                style={styles.input}
                            />

                        </div>
                        <div style={styles.formGroup}>
                            <label htmlFor="type" style={styles.label}>
                                Type
                            </label>
                            <input
                                type="text"
                                name="type"
                                id="type"
                                value={formData.type}
                                onChange={handleInputChange}
                                required
                                style={styles.input}
                            />

                        </div>
                        <div style={styles.formGroup}>
                            <label htmlFor="material" style={styles.label}>
                                Material
                            </label>
                            <input
                                type="text"
                                name="material"
                                id="material"
                                value={formData.material}
                                onChange={handleInputChange}
                                required
                                style={styles.input}
                            />

                        </div>
                        <div style={styles.formGroup}>
                            <label htmlFor="color" style={styles.label}>
                                Color
                            </label>
                            <div style={{ display: 'grid' }}>
                                {/* <ChromePicker color={color} onChange={(e) => setColor(e.hex)} /> */}
                                {Image && <img src={Image} style={{
                                    width: '40px',
                                }} alt="" />}
                            </div>
                            <input
                                type="text"
                                name="color"
                                id="color"
                                value={color}
                                onChange={handleInputColorChange}
                                required
                                style={styles.input}
                            />
                        </div>

                        <div style={styles.formGroup}>
                            <label htmlFor="multilayer" style={styles.label}>
                                Multilayers
                            </label>
                            <div>
                                <input
                                    type="radio"
                                    id="enableMultilayers"
                                    name="multilayer"
                                    value="true"
                                    style={styles.radio}
                                    onClick={() => setLayer(true)}
                                />
                                <label htmlFor="enableMultilayers" style={styles.radioLabel}>
                                    Enable
                                </label>
                                <input
                                    type="radio"
                                    id="disableMultilayers"
                                    name="multilayer"
                                    value="false"
                                    style={styles.radio}
                                    onClick={() => setLayer(false)}
                                />
                                <label htmlFor="disableMultilayers" style={styles.radioLabel}>
                                    Disable
                                </label>
                            </div>
                        </div>
                        <div className="mb-4" style={styles.formGroup}>
                            <label className="form-label">Frame Images </label>{" "}
                            <input
                                className="form-control mt-3"
                                type="file"
                                name="image"
                                onChange={(e) => postDetails(e)}
                            />
                        </div>{" "}
                        {uploading && <p>Uploading image...</p>}
                        {/* <div className="mb-4" style={styles.formGroup}>
              <label className="form-label"> Corner </label>{" "}

              <input
                className="form-control mt-3"
                type="file"
                name="corner"
                onChange={(e) => postDetails(e, e.target.files[0])}
              />
            </div>{" "} */}
                        <button type="submit" style={styles.submitButton}>
                            {edit ? "Edit Frame" : "  Upload Frame"}
                        </button>
                    </form>
                </div>
                <h1>Frames</h1>
                <div className="frames">
                    {frames?.map((item, index) => {
                        return (
                            <div className="frame">
                                <div className="img">
                                    <img src={item.image} alt="" />
                                </div>
                                <div className="details">
                                    <h3>{item.title}</h3>
                                    <button onClick={() => deleteFrame(item._id)}>Delete</button>
                                    <button onClick={() => editFrame(item._id)}>edit</button>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    )
}

export default FrameAdmin
