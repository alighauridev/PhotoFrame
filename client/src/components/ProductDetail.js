import React, { useState } from 'react'
import '../scss/ProductDetail.scss'
import Navigation from '../components/Navigation'
import { AiOutlineUpload, AiOutlineHeart } from 'react-icons/ai'
import { Pagination, Typography, Rating } from '@mui/material'
import { product, productcopy } from '../assests/data'
import '..//components/Footer'
import '..//scss/Product.scss'
import Footer from '..//components/Footer'
const ProductDetail = () => {
    const [value, setValue] = useState();
    return (
      <div>
          <div className='product-detail-parent'>
            {/* NAVUGATION START HERE */}

            <Navigation />
            <div className='detail'>

                <div className='file-chose'>
                    <img src={'./images/2.webp'} />

                    <div style={{ background: '#F4F2EA' }}>
                        <div className='icons'>
                            <span><AiOutlineUpload style={{ color: ' #824E4E' }} /></span>   <span> Upload File Here</span>


                        </div>


                    </div>
                    <div style={{ marginTop: '20px' }}>

                        <h4>
                            Description
                        </h4>
                        <p style={{ marginTop: '20px' }}>
                            Complement your canvas with shimmer and intrigue with this floating-style picture frame. Finished with gold leafing, the antique profile adds extra dimension to your painting thanks to a deep rabbet. Suspends canvases up to 1 1/2", making for a stunning gallery presentation. Inspired by customer-favorite style CFL3.
                            <br /><br />
                            Includes brackets and screws to attach canvas to moulding, wire and heavy-duty D-rings for easy hanging.
                            <br /><br />
                            How do I measure? – Canvas can warp slightly, so measure at the corners for most accurate sizing. Made by Artisans from natural wood.
                        </p>
                        <li>
                            Material: Wood
                        </li>
                        <li>
                            Width: 3/8"

                        </li>
                        <li>
                            Rabbet: 1 1/2"

                        </li>
                    </div>
                </div>

                <div className='product-detail-review'>
                    <h1>
                        Gold Leaf Canvas Floater Frame
                    </h1>
                    <div className='first-flex'>
                        <div>
                            <p>Wood Canvas Floater Collection CFL12</p>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <Typography component="legend"></Typography>
                            <Rating style={{ fontSize: '18px', marginTop: '5px' }}
                                name="simple-controlled"
                                value={value}
                                onChange={(event, newValue) => {
                                    setValue(newValue);
                                }}
                            />
                            <p style={{ marginLeft: '8px', marginTop: '10px' }} >Write a review</p>
                            <span style={{ marginLeft: '10px', marginTop: '10px' }}><AiOutlineHeart /></span>
                        </div>
                    </div>

                    <div className='option-first'>
                        <select>
                            <option>Add a Picture</option>
                            <option>Upload a Picture</option>
                            <option>Stock Art</option>
                        </select>
                    </div>



                    {/* PRICE SECTION START HERE */}

                    <div className='price'>
                        <div className='price-detail'>
                            <h3>Frame CFL12, Gold</h3>
                            <h3>$36.88</h3>
                        </div>
                        <div className='length'>
                            <div className='width'>
                                <p>Set Image Width</p>
                                <select>
                                    <option>6</option>
                                    <option>7</option>
                                    <option>8</option>
                                    <option>9</option>
                                </select>
                                <select>
                                    <option>1/8</option>
                                    <option>1/5</option>
                                    <option>1/9</option>
                                    <option>1/2</option>
                                </select>
                            </div>
                            <div className='width'>
                                <p>Set Image Height</p>
                                <select>
                                    <option>6</option>
                                    <option>7</option>
                                    <option>8</option>
                                    <option>9</option>
                                </select>
                                <select>
                                    <option>1/8</option>
                                    <option>1/5</option>
                                    <option>1/9</option>
                                    <option>1/2</option>
                                </select>
                            </div>
                            <center>
                                <h4>Approximate Outside Frame Size: Width 7” x Height 7”</h4>
                            </center>
                        </div>


                    </div>


                    {/* ADD TO CART SECTION START HERE */}

                    <div className='cart'>
                        <div>
                            <span>
                                QTY
                            </span>
                            <input type='number' />
                        </div>
                        <div>
                            TOTAL COST $00.00
                        </div>


                    </div>
                    <div className='cart-button'>
                        <button>ADD TO CART</button>
                    </div>

                </div>
            </div>

            <div>
                <center><h1 style={{ fontSize: '38px', marginTop: '80px' }}>
                    You Might Also Like...
                </h1></center>

            </div>


            <div className='product-images-grid'>
                {
                    productcopy.map((map) => {
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
          
        </div>
        <Footer/>
      </div>
     
    )
}

export default ProductDetail