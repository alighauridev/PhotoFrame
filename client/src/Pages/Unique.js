import React from 'react'
import { Link } from 'react-router-dom'
import '../scss/Uni.scss'
const Unique = () => {
  return (
    <div>
    <div style={{padding:'80px 0'}}>
     <div>
       <center><h1 style={{fontFamily:'Montserrat, system-ui',fontSize:'48px',fontWeight:'600',margin:'0',paddingBottom:'40px'}}>unique gift</h1></center>
       <center><p style={{fontFamily:'Montserrat, system-ui',fontSize:'18px',fontWeight:'400',margin:'0',paddingBottom:'40px',color:'#00000080',lineHeight:'30px'}}>Painted canvases are unique gifts that convey deep emotions and memories. Add a personal touch to your special occasion <br />
        and surprise your loved ones with a work of art that comes from the heart.</p></center>
     </div>
     <div style={{display:'flex',justifyContent:'center',gap:'40px'}} className='uni-parent'>
       <center><img src="./images/uni1.png" alt="" width={'100%'} /></center>
       <center><img src="./images/uni2.png" alt="" width={'100%'} /></center>
       <center><img src="./images/uni3.png" alt="" width={'100%'} /></center>
     </div>
     <div>
    
     </div>
   </div>

</div>
  )
}

export default Unique