// import React, { Fragment } from 'react'
// import '../scss/footer.scss'
// import { FaFacebook, FaLinkedinIn } from 'react-icons/fa'
// import { BsInstagram } from 'react-icons/bs'
// import { AiOutlineTwitter } from 'react-icons/ai'
// const Footer = () => {
//   return (
//     <Fragment>
//       <footer className="footer">
//         <div className="container">
//           <div className="row">
//             <div className="footer-col">
//               <h4>company</h4>
//               <ul>
//                 <li><a href="#">about us</a></li>
//                 <li><a href="#">our services</a></li>
//                 <li><a href="#">privacy policy</a></li>
//                 <li><a href="#">affiliate program</a></li>
//               </ul>
//             </div>
//             <div className="footer-col">
//               <h4>get help</h4>
//               <ul>
//                 <li><a href="#">FAQ</a></li>
//                 <li><a href="#">shipping</a></li>
//                 <li><a href="#">returns</a></li>
//                 <li><a href="#">order status</a></li>
//                 <li><a href="#">payment options</a></li>
//               </ul>
//             </div>
//             <div className="footer-col">
//               <h4>online shop</h4>
//               <ul>
//                 <li><a href="#">Wooden</a></li>
//                 <li><a href="#">Classic</a></li>
//                 <li><a href="#">Metalic</a></li>
//                 <li><a href="#">Glass</a></li>
//               </ul>
//             </div>
//             <div className="footer-col">
//               <h4>follow us</h4>
//               <div className="social-links">
//                 <a href="#"><FaFacebook /></a>
//                 <a href="#"><BsInstagram /></a>
//                 <a href="#"><FaLinkedinIn /></a>
//                 <a href="#"><AiOutlineTwitter /></a>
//               </div>
//             </div>
//           </div>
//         </div>

//       </footer>
//       <div>
//         <center><h4 style={{ color: 'white', background: 'rgb(17, 17, 17)', padding: '10px  0 10px 0' }}>Copyright All Rights Reserved Photo Frame</h4></center>
//       </div>
//     </Fragment>
//   )
// }

// export default Footer
import React from 'react'
import {BsFacebook} from 'react-icons/bs'
import {AiOutlineInstagram,AiOutlineTwitter,AiOutlineGithub} from 'react-icons/ai'
const Footer = () => {
  return (
    <div style={{padding:'80px 0 40px 0',background:'#F8F8F8'}}>
    <div style={{display:'flex',justifyContent:'center',gap:'40px',flexWrap:'wrap'}}>
      <h4 style={{fontSize:'16px',fontWeight:'400',color:'#6B7280'}}>Home</h4>
      <h4 style={{fontSize:'16px',fontWeight:'400',color:'#6B7280'}}>About Us</h4>
      <h4 style={{fontSize:'16px',fontWeight:'400',color:'#6B7280'}}>How Its Work</h4>
      <h4 style={{fontSize:'16px',fontWeight:'400',color:'#6B7280'}}>Services</h4>
      <h4 style={{fontSize:'16px',fontWeight:'400',color:'#6B7280'}}>Partners</h4>
    </div>
    <div style={{display:'flex',justifyContent:'center',gap:'40px ',marginTop:'20px',flexWrap:'wrap'  }}>
<BsFacebook style={{fontSize:'16px',fontWeight:'400',color:'#6B7280'}}/>
<AiOutlineInstagram style={{fontSize:'16px',fontWeight:'400',color:'#6B7280'}}/>
<AiOutlineTwitter style={{fontSize:'16px',fontWeight:'400',color:'#6B7280'}}/>
<AiOutlineGithub style={{fontSize:'16px',fontWeight:'400',color:'#6B7280'}}/>
    </div>
    <div>
      <center><p style={{marginTop:'20px',fontSize:'16px',color:'#6B7280'}}>© 2023 Pictureframe, Inc. All rights reserved.</p></center>
    </div>
</div>
  )
}

export default Footer