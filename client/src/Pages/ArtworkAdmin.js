import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "../api/axios";
import { useSelector } from "react-redux";
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
const ArtworkAdmin = () => {
    const UserLogin = useSelector((state) => state.UserLogin);
    const [Image, setImage] = useState("");
    const [layer, setLayer] = useState(false);
    const { id } = useParams();
    const [toggle, setToggle] = useState(false);
    const [uploading, setUploading] = useState(false);
    const [color, setColor] = useState("#000000");
    const [category, setCategory] = useState("");
    const [edit, setEdit] = useState(false);
    const [formData, setFormData] = useState({
        title: "",
        description: "",

        image: null,

        price: null,
    });
    const [artworks, setArtworks] = useState([]);
    const { userInfo } = UserLogin;
    const [mainCategories, setMainCategories] = useState([]);
    const [loading, setloading] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('/api/categories/art')
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
                await axios.post("/api/artwork/create", {
                    ...formData,

                    category,
                    user: userInfo._id,
                });
                setToggle(!toggle);

                alert("Artwork uploaded successfully!");
                setFormData({
                    title: "",
                    description: "",

                    image: null,

                    price: null,

                });
                navigate("/artwork");
            } catch (error) {
                console.error("Error uploading artwork:", error);
                alert("Error uploading artwork.");
            }
        } else {
            try {
                await axios.put(`/api/artwork/${id}`, {
                    ...formData,
                    category,
                });
                setToggle(!toggle);

                alert("Artwork Edit successfully!");
                setFormData({
                    title: "",
                    description: "",

                    image: null,
                    price: null,

                });
                setEdit(false);
                navigate("/artwork");
            } catch (error) {
                console.error("Error uploading artwork:", error);
                alert("Error uploading artwork.");
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


    const deleteArtwork = async (id) => {
        setEdit(false);
        try {
            await axios.delete(`/api/artwork/user/${id}`);
            setToggle(!toggle);
        } catch (error) {
            console.error("Error deleting artwork:", error);
        }
    };

    const editArtwork = async (id) => {

        setEdit(true);
        try {
            const { data } = await axios.get(`/api/artwork/${id}`);
            setFormData({
                title: data.title,
                description: data.description,
                image: data.image,
                category: data.category,
                price: data.price,
                user: data.user,
            });
        } catch (error) {
            console.error("Error editing artwork:", error);
        }
    };




    useEffect(() => {
        window.scroll(0, 0);
        if (id) {
            setEdit(true);
            editArtwork(id);
        }
    }, [id]);
    return (
        <div>
            <Link to={"/frame-inquiries"}>Check Artwork Inquiries</Link>
            <div className="admin__panel">
                <h1>{id ? "Edit Artwork" : "Upload Artwork"}</h1>
                <div className="upload__artwork">
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
                            <label htmlFor="price" style={styles.label}>
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
                            <label htmlFor="category" style={styles.label}>
                                Category
                            </label>
                            <select
                                value={category}
                                onChange={(e) => setCategory(e.target.value)}
                            >
                                <option value="">Select a category</option>
                                {mainCategories?.map((category) => (
                                    <option key={category._id} value={category._id}>
                                        {category.name}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div className="mb-4" style={styles.formGroup}>
                            <label className="form-label">Artwork Image</label>
                            <input
                                className="form-control mt-3"
                                type="file"
                                name="image"
                                onChange={(e) => postDetails(e)}
                            />
                        </div>
                        {uploading && <p>Uploading image wait...</p>}
                        {Image && <img src={Image} style={{ width: "40px" }} alt="" />}
                        {!uploading && (
                            <button type="submit" style={styles.submitButton}>
                                {edit ? "Edit Artwork" : "Upload Artwork"}
                            </button>
                        )}
                    </form>
                </div>
                <h1>Artworks</h1>
                <div className="artworks">
                    {artworks?.map((item, index) => {
                        return (
                            <div className="artwork">
                                <div className="img">
                                    <img src={item.image} alt="" />
                                </div>
                                <div className="details">
                                    <h3>{item.title}</h3>
                                    <button onClick={() => deleteArtwork(item._id)}>
                                        Delete
                                    </button>
                                    <button onClick={() => editArtwork(item._id)}>Edit</button>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default ArtworkAdmin;
