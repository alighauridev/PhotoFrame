// import React, { useState, useRef, useEffect } from "react";
// import { Link } from "react-router-dom";
// import { nav } from "../assests/data";
// import "../scss/navigation.scss";
// import { FaDiscord } from "react-icons/fa";
// import { FaTelegramPlane } from "react-icons/fa";
// import { AiOutlineTwitter } from "react-icons/ai";
// import { FaRedditAlien } from "react-icons/fa";
// import { FaTiktok } from "react-icons/fa";
// import { FaInstagram } from "react-icons/fa";
// import { ImCross } from "react-icons/im";
// import { BsChevronUp } from "react-icons/bs";
// import { useSelector } from "react-redux";
// const Navigation = ({ }) => {
//   const [navToggler, setNavToggler] = useState(false);
//   const [navColor, setNavColor] = useState(false);
//   const [scroll, setScroll] = useState(false);
//   const [target, setTarget] = useState(false);
//   const [length, setLength] = useState(null);
//   const [modal, setmodal] = useState(false);
//   const [lio, setlio] = useState(null);
//   const user = useSelector(state => state.UserLogin.userInfo)
//   window.addEventListener("scroll", () => {
//     if (window.pageYOffset > 300) {
//       setScroll(true);
//     } else {
//       setScroll(false);
//     }
//     if (window.scrollY >= 70) {
//       setNavColor(true);
//     } else {
//       setNavColor(false);
//       setNavToggler(false);
//     }
//   });

//   function barBtn() {
//     setNavToggler(!navToggler);
//     setNavColor(!navColor);
//   }

//   const scrollNavFunc = () => {
//     var doc = document.documentElement;
//     var w = window;
//     var curScroll;
//     var prevScroll = w.scrollY || doc.scrollTop;
//     var curDirection = 0;
//     var prevDirection = 0;
//     var toggled;
//     var threshold = 200;
//     var checkScroll = function () {
//       curScroll = w.scrollY || doc.scrollTop;
//       if (curScroll > prevScroll) {
//         curDirection = 2;
//       } else {
//         curDirection = 1;
//       }
//       if (curDirection !== prevDirection) {
//         toggled = toggleHeader();
//       }
//       prevScroll = curScroll;
//       if (toggled) {
//         prevDirection = curDirection;
//       }
//     };
//     const toggleHeader = () => {
//       if (curDirection === 2 && curScroll > threshold) {
//         setTarget(true);
//       } else if (curDirection === 1) {
//         setTarget(false);
//       }
//     };

//     window.addEventListener("scroll", checkScroll);
//   };
//   useEffect(() => {
//     scrollNavFunc();
//   }, []);

//   return (
//     <>
//       <header
//         style={{
//           top: !target ? "0" : "-100px",
//         }}
//         className={navColor ? "nav__active" : ""}
//       >
//         <div className="outer">
//           <div className="container">
//             <div className="nav__grid">
//               <div className="logo">
//                 <a href="/" >
//                   <img src="https://d29mtkonxnc5fw.cloudfront.net/site_assets/levelframes-glossier2.svg" alt="" />
//                 </a>
//               </div>
//               <nav style={{ right: navToggler ? 0 : "-100%" }}>
//                 <ul>
//                   {nav.map((ite, ind) => {
//                     return (
//                       <>
//                         {
//                           ite.page ? <li key={ind}>
//                             <Link to={ite.path}>{ite.name}</Link>
//                           </li> : <li key={ind}>
//                             <a href={ite.path}>{ite.name}</a>
//                           </li>
//                         }
//                       </>
//                     );
//                   })}
//                   {
//                     !user?.token ? <li><Link to={'/login'}>Login</Link></li> : null
//                   }
//                   <li className="nav__links">
//                     {/* <a href="https://discord.gg/qTYfExSXZR" target="_blank">
//                       <FaDiscord />
//                     </a> */}
//                     <a href="https://twitter.com/kaiyocats" target="_blank">
//                       <AiOutlineTwitter />
//                     </a>
//                     <a
//                       href="https://www.tiktok.com/t/ZTRANPxbH/"
//                       target="_blank"
//                     >
//                       <FaTiktok />
//                     </a>
//                   </li>
//                 </ul>
//               </nav>
//               <div className="nav__btns">



//                 <div onClick={() => barBtn()}>
//                   <span
//                     style={{
//                       transform: navToggler
//                         ? "translateY(15px) rotate(45deg)"
//                         : "unset",
//                     }}
//                   ></span>
//                   <span
//                     style={{
//                       display: navToggler ? "none " : "unset",
//                     }}
//                   ></span>
//                   <span
//                     style={{
//                       transform: navToggler
//                         ? "translateY(-6px) rotate(-45deg) "
//                         : "unset",
//                     }}
//                   ></span>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </header>
//       <div
//         onClick={() => window.scroll(0, 0)}
//         className="auto_scroll"
//         style={scroll ? { transform: "scale(1)" } : {}}
//       >
//         <BsChevronUp />
//       </div>


//     </>
//   );
// };

// export default Navigation;


import React from 'react'
import '../scss/Navbar.scss'
import { Link } from 'react-router-dom'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import {AiOutlineUser} from 'react-icons/ai'
const Navigation = () => {
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
 <div className="mega-menu-parent">
     <nav>
      <div className="wrapper">
        <div className="logo">
       
        </div>
        <input type="radio" name="slider" id="menu-btn" />
        <input type="radio" name="slider" id="close-btn" />
        <ul className="nav-links">
          <label htmlFor="close-btn" className="btn close-btn">
            <i className="fas fa-times" />
          </label>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/frames">Frame</Link>
          </li>
          <li>
            <Link to="#">About</Link>
          </li>
          <li>
            <Link to="/pannel">Pannel</Link>
          </li>
     
          
        
        
          <li>
            <Link to="" className="desktop-item">
            Art Work Categories


            </Link>
            <input type="checkbox" id="showDrop" />
            <label htmlFor="showDrop" className="mobile-item">
              
            </label>
            <ul className="drop-menu">
              <li style={{margin:"0"}}>
                <Link to="">Islamic Calligraphies
</Link>
              </li>
              <li style={{margin:"0"}}>
                <Link to=''> - Modern Art Calligraphies
</Link>
              </li>
              <li style={{margin:"0"}}>
                <Link to=''> - Sceneries
</Link>
              </li>
              <li style={{margin:"0"}}>
                <Link to=''>- Historical art
</Link>
              </li>
              <li style={{margin:"0"}}>
                <Link to=''>- Abstract art

</Link>
              </li>
            </ul>
          </li>
          <li>
            <Link to="" className="desktop-item">
            Custom Frame Categories:


            </Link>
            <input type="checkbox" id="showDrop" />
            <label htmlFor="showDrop" className="mobile-item">
              
            </label>
            <ul className="drop-menu">
              <li style={{margin:"0"}}>
                <Link to="">Wood

</Link>
              </li>
              <li style={{margin:"0"}}>
                <Link to=''>  Metal

</Link>
              </li>
              <li style={{margin:"0"}}>
                <Link to=''>Canvas Stretched (no frame)

</Link>
              </li>
              <li style={{margin:"0"}}>
                <Link to=''>Canvas Floaters Canvas strethched within another frame

</Link>
              </li>
              <li style={{margin:"0"}}>
                <Link to=''>Fiber-Glass/Resin Frames

</Link>
              </li>
            </ul>
          </li>
        

          <li>
            <Link to="" className="desktop-item">
              <span><AiOutlineUser/> </span>
           Login 


            </Link>
            <input type="checkbox" id="showDrop" />
            <label htmlFor="showDrop" className="mobile-item">
              
            </label>
            <ul className="drop-menu">
              <li style={{margin:"0"}}>
                <Link to="/login">Login

</Link>
              </li>
              <li style={{margin:"0"}}>
                <Link to='/signup'>  Signin

</Link>
              </li>
          
          
            </ul>
          </li>
       
        </ul>
        <label htmlFor="menu-btn" className="btn menu-btn">
          <i className="fas fa-bars" />
        </label>
      </div>
    </nav>
 </div>

  )
}

export default Navigation