import React from 'react'
import Navigation from './/Navigation'
import '..//scss/Product.scss'
import { colors, depth, popularframe, style, width } from '..//assests/data'
import { Pagination } from '@mui/material'
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


                {/* SIDEBAR SECTION START HERE */}



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





                    {/* POPULAR FRAME SIZE SECTION START HERE */}

                    <div className='popular-frames'>

                        <h4>Popular Frame Sizes or <br /> Customize up to an 1/8" </h4>
                        <div className='popular-parent-div'>
                            {
                                popularframe.map((map) => {
                                    return (
                                        <div className='popular-div'>
                                            <input type='checkbox' />
                                            <h3>{map.size}</h3>
                                        </div>
                                    )
                                })
                            }

                        </div>
                    </div>


                    {/* FRAME METERIAL SECTION START HERE */}

                    <div className='frame-material'>
                        <h4>Frame Material </h4>

                        <div className='frame-material-div'>

                            <div className='frame-material-div'>
                                <input type='checkbox' />
                                <h3>Canvas Floater (15)</h3>
                            </div>

                        </div>
                    </div>


                    {/* FRAME TYPE SECTION START HERE */}
                    <div className='frame-material'>
                        <h4>Frame Type</h4>

                        <div className='frame-material-div'>

                            <div className='frame-material-div'>
                                <input type='checkbox' />
                                <h3>Canvas Floater (7)</h3>
                            </div>
                            <br />
                            <div className='frame-material-div'>
                                <input type='checkbox' />
                                <h3>Plein Air</h3>
                            </div>

                        </div>
                    </div>


                    {/* STYLE SECTION START HERE */}

                    <div className='frame-material'>
                        <h4>Style </h4>

                        {
                            style.map((map) => {
                                return (
                                    <div className='frame-material-div'>

                                        <div className='frame-material-div'>
                                            <input type='checkbox' />
                                            <h3>{map.type}</h3>
                                        </div>


                                    </div>
                                )
                            })
                        }
                    </div>

                    {/* FRAME WIDTH */}
                    <div className='frame-material'>
                        <h4>Frame Width </h4>

                        {
                            width.map((map) => {
                                return (
                                    <div className='frame-material-div'>

                                        <div className='frame-material-div'>
                                            <input type='checkbox' />
                                            <h3>{map.type}</h3>
                                        </div>


                                    </div>
                                )
                            })
                        }
                    </div>



                    {/*Rabbet Depth */}
                    <div className='frame-material'>
                        <h4>Rabbet Depth </h4>

                        {
                            depth.map((map) => {
                                return (
                                    <div className='frame-material-div'>

                                        <div className='frame-material-div'>
                                            <input type='checkbox' />
                                            <h3>{map.type}</h3>
                                        </div>


                                    </div>
                                )
                            })
                        }
                    </div>


                </div>




                {/* PRODUCT IMAGES SECTION START HERE */}




                <div className='product-image'>


                    {/* SORT SECTION START HERE */}

                    <div className='sort-parent'>
                        <div className='sort-section'>
                            <h4>SORT BY </h4>
                            <select>
                                <option>BEST SELLINGS</option>
                                <option>PRICE HIGHT TO LOW</option>
                                <option>PRICE LOW TO HIGH</option>
                            </select>
                        </div>
                        <div className='sort-section' >
                            <h4>ITEMS PER PAGE </h4>
                            <select style={{ padding: '5px 40px' }}>
                                <option>36</option>
                                <option>40</option>
                                <option>80</option>
                            </select>
                           
                        </div>
                        <div className='sort-section' >
                        <Pagination count={5} />
                           
                        </div>
                    </div>


{/* PRODUCT IMAGES START HERE */}
                </div>






            </div>

        </div>
    )
}

export default Product