import React from 'react'
import { Link } from 'react-router-dom'
const Upload = () => {
  return (
    <div style={{background:'#F8F8F8',padding:'80px 0'}}>
    <div>
      <center><h1 style={{fontFamily:'Montserrat, system-ui',fontSize:'48px',fontWeight:'600',margin:'0',paddingBottom:'40px'}}>Photos To Masterpience</h1></center>
      <center><p style={{fontFamily:'Montserrat, system-ui',fontSize:'18px',fontWeight:'400',margin:'0',paddingBottom:'40px'}}>Turn your Photo into a masterpiece and create unforgettable memories! Start Now</p></center>
    </div>
   
    <div>
    <div>
      
       <label htmlFor="upload"> <center><button style={{background:'#4890A9',borderRadius:'50px',padding:'13px 25px',color:'white',border:'none'}}>Upload Photo</button></center></label>
       <input type="file" id='upload'  style={{display:'none'}}/>
         
      </div>
    </div>
  </div>
  )
}

export default Upload