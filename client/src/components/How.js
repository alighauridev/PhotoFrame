import React from 'react'
import '.././scss/How.scss'
const How = () => {
  return (
    <div style={{padding:'80px 0'}}>
        <div>
            <center><h1 style={{fontFamily:'Montserrat, system-ui',fontSize:'48px',fontWeight:'600'}}>How it work</h1></center>
            <center><p style={{color:'#00000080',lineHeight:'25px'}}>Stacks is a production-ready library of stackable <br /> content blocks built in React Native.</p></center>
        </div>
        <div style={{display:"flex",justifyContent:'center',gap:'40px',padding:'60px 0'}} className='how-parent'>
            <div>
                <center>
                <img src="./images/h1.png" alt="" width={'30%'} />
                <h5 style={{padding:'20px 0'}}>Upload your photo</h5>
                <p style={{color:'#00000080',lineHeight:'25px'}}>Choose a photo you want to <br /> transform into a masterpiece.</p>
                </center>
            </div>
            <div>
                <center>
                <img src="./images/h2.png" alt="" width={'30%'} />
                <h5 style={{padding:'20px 0'}}>Filter and frid</h5>
                <p style={{color:'#00000080',lineHeight:'25px'}}>Choose a photo you want to <br /> transform into a masterpiece.</p>
                </center>
            </div>
            <div>
                <center>
                <img src="./images/h3.png" alt=""  width={'30%'}/>
                <h5 style={{padding:'20px 0'}}>Painting Together</h5>
                <p style={{color:'#00000080',lineHeight:'25px'}}>Choose a photo you want to <br /> transform into a masterpiece.</p>
                </center>
            </div>
            <div>
                <center>
                <img src="./images/h4.png" alt="" width={'30%'} />
                <h5 style={{padding:'20px 0'}}>The finished artwork</h5>
                <p style={{color:'#00000080',lineHeight:'25px'}}>Choose a photo you want to <br /> transform into a masterpiece.</p>
                </center>
            </div>
        </div>
    </div>
  )
}

export default How