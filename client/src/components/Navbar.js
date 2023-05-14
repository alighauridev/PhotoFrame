import React from 'react'
import '../scss/Navbar.scss'
import { Link } from 'react-router-dom'
const Navbar = () => {
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
        
        
        </ul>
        <label htmlFor="menu-btn" className="btn menu-btn">
          <i className="fas fa-bars" />
        </label>
      </div>
    </nav>
 </div>

  )
}

export default Navbar