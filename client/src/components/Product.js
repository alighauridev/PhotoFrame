import { React, useEffect, useState, useRef } from 'react'
import Navigation from './/Navigation'
import '..//scss/Product.scss'
import { colors, depth, popularframe, product, style, width } from '..//assests/data'
import { Pagination, Typography, Rating } from '@mui/material'
import Footer from '..//components/Footer'






const Product = () => {
    const [value, setValue] = useState();
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

                    <div className='product-images-grid'>
                        {
                            product.map((map) => {
                                return (
                                    <div>
                                        <img src={map.img} />
                                        <h4>{map.h4}</h4>
                                        <p>{map.p}</p>
                                        <Typography component="legend"></Typography>
                                        <Rating style={{ fontSize: '18px', marginTop: '5px' }}
                                            name="simple-controlled"
                                            value={value}
                                            onChange={(event, newValue) => {
                                                setValue(newValue);
                                            }}
                                        />
                                    </div>
                                )
                            })
                        }
                    </div>

                    <div className='sort-parent' style={{ margin: '40px 0' }}>

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



                    {/* SECTION DETAIL */}

                    <center>
                        <div className='detail'>
                            <h1>Custom Frame Styles</h1>
                            <p>
                                Do you prefer modern picture frames or more antique designs? No matter your preference, the perfect option for your space does exist! Choose a bold ornate frame in metal or wood to capture a framed canvas print's antique element, or get a more contemporary style with a sleek, streamlined frame. To get creative, try mixing and matching different custom photo frames for a unique, timeless look!
                            </p>
                        </div>
                        <div className='detail'>
                            <h1>Picture Frame Sizes</h1>
                            <p>
                            Whether you’re looking for large picture frames or small picture frames, we carry options in a HUGE variety of common dimensions. Shop our selection by size from 6x6 inch frames up to 40x60-inch frames. Don’t see the size you need? No problem. Here, you can customize your frames up to 1/8 of an inch.
                            </p>
                        </div>
                        <div className='detail'>
                            <h1>Custom Frame Finishes and Colors</h1>
                            <p>
                            Select the frame colors and finishes you like best to create the aesthetic you want. Find neutral wood finishes, classic gold and silver metallics, and more vibrant colors to further personalize your art and your living space. Make your space picture-perfect with a wide range of custom frames online for your favorite art pieces or digital memories
                            </p>
                            <button>Read More</button>
                        </div>
                    </center>
                </div>






            </div>

<Footer/>
        </div>
    )
}

export default Product