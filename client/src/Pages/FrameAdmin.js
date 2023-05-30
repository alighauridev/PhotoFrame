import React, { useState, useEffect } from "react";
import {
    BrowserRouter,
    Link,
    Route,
    Routes,
    useNavigate,
    useParams,
} from "react-router-dom";

import axios from "../api/axios";
import { useDropzone } from "react-dropzone";
// import "bootstrap/dist/css/bootstrap.min.css";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

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

const FrameAdmin = () => {
    const dispatch = useDispatch();
    const UserLogin = useSelector((state) => state.UserLogin);
    const [Image, setImage] = useState("");
    const [layer, setLayer] = useState(false);

    const [toggle, setToggle] = useState(false);
    const [uploading, setUploading] = useState(false);
    const [color, setColor] = useState("#000000");
    const [loading, setLoading] = useState(false);
    const [category, setCategory] = useState("");
    const [edit, setEdit] = useState(false);
    const { id } = useParams();
    const [formData, setFormData] = useState({
        title: "",
        description: "",
        price: null,
        image: null,
        multiLayer: false,
    });
    const navigate = useNavigate();
    const [frames, setframes] = useState([]);
    const { userInfo } = UserLogin;
    const [mainCategories, setMainCategories] = useState([]);
    const [subCategories, setSubCategories] = useState([]);
    const [selectedMainCategory, setSelectedMainCategory] = useState(null);

    useEffect(() => {
        axios.get('/api/categories/frame')
            .then(response => {
                setMainCategories(response.data[0].subcategories);
            })
            .catch(error => {
                console.error(error);
            });
    }, []);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
        console.log(formData, layer);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!edit) {
            try {
                await axios.post("/api/frame/user/create", {
                    ...formData,
                    multiLayer: layer,
                    category,
                    user: userInfo._id,
                });
                setToggle(!toggle);
                toast.success("Frame uploaded successfully!")

                setFormData({
                    title: "",
                    description: "",
                    image: null,
                    price: null,
                    multiLayer: false,
                });
                navigate("/frame");
            } catch (error) {
                toast.error("Error uploading frame.")
            }
        } else {
            try {
                await axios.put(`/api/frame/user/${id}`, {
                    ...formData,
                    multiLayer: layer,
                    category,
                });
                setToggle(!toggle);


                toast.success("Frame Edit successfully!")
                navigate("/frame");
                setFormData({
                    title: "",
                    description: "",
                    image: null,
                    price: null,
                    multiLayer: false,
                });
                setEdit(false);
            } catch (error) {
                console.error("Error Updating frame:", error);

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

    const editFrame = async (id) => {
        window.scroll(0, 0);

        setEdit(true);
        try {
            setLoading(true);
            const { data } = await axios.get(`/api/frame/${id}`);
            setFormData({
                title: data.title,
                description: data.description,
                image: data.image,
                price: data.price,
            });
            setCategory(data.category._id);
            setLayer(data.multiLayer);
            setLoading(false);

        } catch (error) {
            setLoading(false);
            toast.error(error)
        }
    };

    useEffect(() => {
        window.scroll(0, 0);
        if (id) {
            setEdit(true);
            editFrame(id);
        }
    }, [id]);

    return (
        <div>
            <Link to={"/artwork-inquiries"}>Check Inquiries</Link>
            <div className="admin__panel">
                <h1>{id ? "Edit Frame" : "Upload Frame"}</h1>
                {loading ? (
                    <p>loading.....</p>
                ) : (
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
                                    Category
                                </label>
                                <select
                                    value={category}
                                    onChange={(e) => setCategory(e.target.value)}
                                >
                                    <option value="">Select a main category</option>
                                    {mainCategories?.map((category) => (
                                        <option key={category._id} value={category._id}>
                                            {category.name}
                                        </option>
                                    ))}
                                </select>
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
                            {uploading && <p>Uploading image wait... </p>}
                            {Image && (
                                <img
                                    src={Image}
                                    style={{
                                        width: "40px",
                                    }}
                                    alt=""
                                />
                            )}
                            {!uploading && (
                                <button type="submit" style={styles.submitButton}>
                                    {edit ? "Edit Frame" : "  Upload Frame"}
                                </button>
                            )}
                        </form>
                    </div>
                )}
            </div>
        </div>
    );
};

export default FrameAdmin;
