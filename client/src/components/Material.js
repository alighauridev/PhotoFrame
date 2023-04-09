import React from 'react'
import "../scss/material.scss"
const Material = () => {
    return (
        <>
            <section className='material'>
                <div className="container">
                    <h2>The Highest-Quality Materials for Your Framed Photos</h2>
                    <p>We'll print on your choice of fine art or professional photo paper using archival inks guaranteed not to fade. Select the frame style from a variety of all-wood profiles, with looks ranging from modern to classic to rustic farmhouse. Finish by adding beveled, acid-free matting plus premium acrylic to enhance and protect your pictures for years to come.</p>
                    <div className="img__grid">
                        <div className="item">
                            <img src="https://d29mtkonxnc5fw.cloudfront.net/good-print-example.jpg" alt="" />
                        </div>
                        <div className="item">
                            <img src="https://d29mtkonxnc5fw.cloudfront.net/site_assets/rustic-collection-fan.jpg" alt="" />
                        </div>
                        <div className="item">
                            <img src="https://d29mtkonxnc5fw.cloudfront.net/site_assets/frame_corners_new.jpg" alt="" />
                        </div>
                    </div>
                    <p>Each framed photo is made in the U.S.A. and customized exactly to your liking with museum-quality components. Learn more about the frame styles and components in <a href="">custom picture framing online.</a>

                    </p>
                </div>
            </section>
        </>
    )
}

export default Material
