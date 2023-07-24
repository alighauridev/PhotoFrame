import React from 'react'
import '../scss/Favi.scss'
const Favi = () => {
  return (
    <div>
     <div style={{background:'#F8F8F8',padding:'80px 0'}}>
      <div>
        <center><h1 style={{fontFamily:'Montserrat, system-ui',fontSize:'48px',fontWeight:'600',margin:'0',paddingBottom:'40px'}}>Top Trending and Favorite Frames</h1></center>
        <center><p style={{fontFamily:'Montserrat, system-ui',fontSize:'18px',fontWeight:'400',margin:'0',paddingBottom:'40px',lineHeight:'30px'}}>Painted canvases are unique gifts that convey deep emotions and memories. Add a personal touch to your special occasion <br /> and surprise your loved ones with a work of art that comes from the heart.</p></center>
      </div>
   <div style={{display:'flex',justifyContent:"center",gap:'40px',marginTop:'40px'}} className='favi-parent'>
    <div style={{position:'relative'}} >
      <img src="./images/frame1.png" alt="" width={'100%'} />
      <div style={{position:'absolute',top:'250px',width:'100%',background:'white',padding:'15px 20px',width:'90%',left:'20px',borderRadius:'8px'}}>
        <h3>Best-Seller Picture Frames</h3>
        <p  style={{margin:'10px 0 0 0'}}>Shop our shining stars! Our most popular styles to bring your photos to life.</p>
      </div>
    </div>
    <div style={{position:'relative'}} >
      <img src="./images/fra2.png" alt="" width={'100%'} />
      <div style={{position:'absolute',top:'250px',width:'100%',background:'white',padding:'15px 20px',width:'90%',left:'20px',borderRadius:'8px'}}>
        <h3>Best-Seller Picture Frames</h3>
      
        <p style={{margin:'10px 0 0 0'}}>Shop our shining stars! Our most popular styles to bring your photos to life.</p>
      </div>
    </div>
    <div style={{position:'relative'}} >
      <img src="./images/frame3.png" alt="" width={'100%'} />
      <div style={{position:'absolute',top:'250px',width:'100%',background:'white',padding:'15px 20px',width:'90%',left:'20px',borderRadius:'8px'}}>
        <h3>Best-Seller Picture Frames</h3>
       
        <p style={{margin:'10px 0 0 0'}}>Shop our shining stars! Our most popular styles to bring your photos to life.</p>
      </div>
    </div>
   </div>
      <div>
     
      </div>
    </div>

 </div>
  )
}

export default Favi