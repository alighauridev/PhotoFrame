import React from 'react'
import Navigation from './/Navigation'
import '..//scss/Product.scss'
import { colors } from '..//assests/data'
const Product = () => {
    return (
        <div className='product-parent'>


            {/* NAVIGATION START HERE */}


            <div className='navbar'>
                <Navigation />
            </div>


            {/* FIRST INTRO SECTION START HERE */}


            <div className='first-grid'>

                <div className='text'>

                    <h1>The Ultimate in Custom Picture Frames</h1>
                    <h5>Celebrate Your Unique Style</h5>
                    <p>You’re well on your way to getting the exact frame you have been envisioning. Filter or browse for the ideal color, material and finish. Choose to upload your own photo or art and preview the finished product. Selecting the just-right size and adding matting or liners when available comes next. Voila! You have built your frame for years of enjoyment to come!</p>
                </div>
                <div className='img'>
                    <img src={'./images/1.jpg'} />
                </div>
            </div>



            {/* SECOND MAIN GRID SECTION START HERE */}

            <div className='colors-filter-product-parent'>

                <div className='colors-filter'>
                    <h4>Colors</h4>
                    <div className='colors-button-parent'>
                        {
                            colors.map((map) => {
                                return (

                                    <div>
                                        <button className={map.class}></button>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
                <div className='product-image'>

                </div>
            </div>



            {/* POPULAR FRAME SIZE SECTION START HERE */}


            
        </div>
    )
}

export default Product