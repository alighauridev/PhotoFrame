
import React from "react";
import "../scss/Navbar.scss";
import { Link } from "react-router-dom";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useDispatch, useSelector } from "react-redux";
import { AiOutlineUser } from "react-icons/ai";
import { logout } from "../Redux/actions/userActions";
import {AiFillStar} from 'react-icons/ai'
const Navigation = () => {
  const [age, setAge] = React.useState("");
  const user = useSelector(state => state.UserLogin.userInfo)
  const { token, name } = user || {}
  const handleChange = (event) => {
    setAge(event.target.value);
  };
  const dispatch = useDispatch()
  return (
 <div className="main-nav-parent">
<div style={{background:'#F3F2EF'}}>
<div className="top-navbar">
   <div className="title">
   <h5>See Our 190 Reviews On</h5>
  <b>
  <h5 style={{display:'flex',alignItems:'center',gap:'5px'}}><span><AiFillStar style={{color:'#00B67A'}}/></span>Trustpilot</h5>
  </b>
   </div>
   <div className="heart">
    <img src="./images/he.png" alt="" />
    <img src="./images/wa.png" alt="" />
   </div>
  </div>
</div>
     <div className="mega-menu-parent">
      <nav>
        <div className="wrapper">
     
          <input type="radio" name="slider" id="menu-btn" />
          <input type="radio" name="slider" id="close-btn" />
       <div style={{display:'flex',justifyContent:'space-between',width:'100%',maxWidth:'1300px',margin:'auto',padding:'15px 0'}}>
       <div className="logo">
            <img src="./images/ss.png" alt="" />
          </div>
          <ul className="nav-links">
        
        <label htmlFor="close-btn" className="btn close-btn">
          <i className="fas fa-times" />
        </label>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/frames-all">Frames</Link>
        </li>
        <li>
          <Link to="/artworks-all">Artworks</Link>
        </li>
        <li>
          <Link to="#">About</Link>
        </li>


        {
          token ? <li>
            <Link to="" className="desktop-item">
              <span>
                <AiOutlineUser />{" "}
              </span>
              {name}
            </Link>
            <input type="checkbox" id="showDrop" />
            <label htmlFor="showDrop" className="mobile-item"></label>

            <ul className="drop-menu">
              <li style={{ margin: "0" }}>
                <Link to="/profile">Profile</Link>
              </li>
              <li style={{ margin: "0" }}>
                <Link to="/artwork">Your Artworks</Link>
              </li>
              <li style={{ margin: "0" }}>
                <Link to="/frame">Your Frames</Link>
              </li>

              <li onClick={() => dispatch(logout())} style={{ margin: "0" }}>
                <Link to="">Logout</Link>
              </li>
            </ul>
          </li> : <li style={{ margin: "0" }}>
            <Link to="/login" style={{background:'#4890A9',borderRadius:'50px',padding:'13px 25px',color:'white'}}>Signup/Login</Link>
          </li>
        }

      </ul>
       </div>
          <label htmlFor="menu-btn" className="btn menu-btn">
            <i className="fas fa-bars" />
          </label>
        </div>
      </nav>
    </div>
 </div>

  );
};

export default Navigation;
