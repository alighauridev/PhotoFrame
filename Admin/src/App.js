import React, { useEffect, useState } from "react";
import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/productScreen";
import CategoriesScreen from "./screens/CategoriesScreen";
import OrderScreen from "./screens/OrderScreen";
import OrderDetailScreen from "./screens/OrderDetailScreen";
import AddProduct from "./screens/AddProduct";
import Login from "./screens/LoginScreen";
import UsersScreen from "./screens/UsersScreen";
import ProductEditScreen from "./screens/ProductEditScreen";
import NotFound from "./screens/NotFound";
import axios from "axios";
import { useDropzone } from "react-dropzone";
import "bootstrap/dist/css/bootstrap.min.css";
import { useDispatch, useSelector } from "react-redux";
import { getAllOrders } from "./Redux/actions/orderActions";
import { getAllProducts } from "./Redux/actions/productActions";
import PrivateRouter from "./PrivateRouter";
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

function App() {
  const dispatch = useDispatch();
  const UserLogin = useSelector((state) => state.UserLogin);
  const [Image, setImage] = useState("");
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    type: "Classic",
    material: "Wooden",
    image: null,
    corner: null
  });
  const [frames, setframes] = useState([]);
  const { userInfo } = UserLogin;
  useEffect(() => {
    if (userInfo && userInfo.isAdmin) {
      dispatch(getAllOrders());
      dispatch(getAllProducts());
    }
  }, [dispatch]);
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
    console.log(formData);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const { title, description, type, material, image, corner } = formData;
    const data = new FormData();
    data.append("title", title);
    data.append("description", description);
    data.append("type", type);
    data.append("material", material);
    data.append("image", image);
    console.log(formData);
    try {
      await axios.post("/api/frame/create", formData);

      alert("Frame uploaded successfully!");
      setFormData({
        title: "",
        description: "",
        type: "Classic",
        material: "Wooden",
        image: null,
        corner: null
      });
    } catch (error) {
      console.error("Error uploading frame:", error);
      alert("Error uploading frame.");
    }
  };
  const postDetails = (e) => {

    if (e.target.files[0].type === "image/jpeg" || e.target.files[0].type === "image/png") {
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
          if (e.target.name == 'corner') {

            setImage(data.url.toString());
            setFormData((prevState) => ({
              ...prevState,
              corner: data.url.toString(),
            }));
            console.log(formData);
          }
          else {
            setImage(data.url.toString());
            setFormData((prevState) => ({
              ...prevState,
              image: data.url.toString(),
            }));
            console.log(formData);
          }

        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      // return setPicMessage("Please Select an Image");
    }
  };
  const getFrames = async () => {
    try {
      const { data } = await axios.get("/api/frame/all");
      setframes(data);
    } catch (error) {
      console.error("Error uploading frame:", error);
    }
  };
  const deleteFrame = async (id) => {
    try {
      const { data } = await axios.delete(`/api/frame/${id}`);
      console.log(data);
    } catch (error) {
      console.error("Error uploading frame:", error);
    }
  };

  useEffect(() => {
    getFrames();
  }, []);

  return (
    <>
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
                Type
              </label>
              <select
                name="type"
                id="type"
                value={formData.type}
                onChange={handleInputChange}
                style={styles.select}
              >
                <option value="Classic">Classic</option>
                {/* Add more types as needed */}
              </select>
            </div>
            <div style={styles.formGroup}>
              <label htmlFor="material" style={styles.label}>
                Material
              </label>
              <select
                name="material"
                id="material"
                value={formData.material}
                onChange={handleInputChange}
                style={styles.select}
              >
                <option value="Wooden">Wooden</option>
                {/* Add more materials as needed */}
              </select>
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
            <div className="mb-4" style={styles.formGroup}>
              <label className="form-label"> Corner </label>{" "}

              <input
                className="form-control mt-3"
                type="file"
                name="corner"
                onChange={(e) => postDetails(e, e.target.files[0])}
              />
            </div>{" "}
            <button type="submit" style={styles.submitButton}>
              Upload Frame
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
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default App;
