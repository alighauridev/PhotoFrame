import React, { useState, useEffect } from 'react'
import '../scss/ProductDetail.scss'
import Navigation from '../components/Navigation'
import { AiOutlineUpload, AiOutlineHeart, } from 'react-icons/ai'

import { Pagination, Typography, Rating } from '@mui/material'
import { product, productcopy } from '../assests/data'
import '..//components/Footer'
import '..//scss/Product.scss'
import Footer from '..//components/Footer'
import { useParams, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getSingleProduct } from '../Redux/actions/productActions'
import ImageDropZone from './ImageDropZone'
import Productbanner from './Productbanner'
const ProductDetail = () => {
    const [value, setValue] = useState();
    const { id } = useParams()
    const product = useSelector(state => state.ProductDetails.product)
    const { image, title, description, material, type, price, color } = product || {}
    const token = useSelector((state) => state.UserLogin.userInfo) || {};
    const dispatch = useDispatch();
    const navigate = useNavigate();
    window.scroll(0, 0)
    useEffect(() => {
        dispatch(getSingleProduct(id))
    }, [id])

    return (
        <>
            <Navigation />
            <Productbanner />
            <div className='product-detail-parent'>
                {/* NAVUGATION START HERE */}

                <div className='detail'>

                    <div className='pic-frame'>
                        <div className='file-chose'>
                        <img src={image} />
                        </div>
                        
<button><AiOutlineUpload style={{color:'white'}}/> Upload Your Picture</button>

<div className="detail-description">
    <h3>Description</h3>

    <p>This black, satin picture frame provides a timeless presentation of your art. With an extra deep rabbet for canvases up to 1 1/2", your art will be suspended and separated from the moulding for a true gallery look. Handcrafted from natural wood.
        <br /><br />
        Includes brackets and screws for attaching canvas to moulding, plus wire and heavy-duty D-rings for easy hanging.
<br /><br />
Measuring Tip: measure canvas at the corners for accurate sizing to account for any warping.
    </p>

    <li>Material: Wood</li>
    <li>Width: 3/8" 
</li>
<li>Rabbet: 1 1/2"</li>
</div>
                    </div>

                    <div className='product-detail-review'>


                        <h3>{title}</h3>

                        <div className="specs">
                            <div className="item">
                                <div className="start">Material</div>
                                <div className="end">{material}</div>
                            </div>
                            <div className="item">
                                <div className="start">Type</div>
                                <div className="end">{type}</div>
                            </div>
                            <div className='upload'>
                                <select name="" id="">
                                    <option value="">Add Picture</option>
                                    <option value="">Upload Picture</option>
                                    <option value="">Stock Art</option>
                                </select>
                            </div>
                            <div className="item">
                                <div className="start">Color</div>
                                <div className="end" style={{ display: 'flex' }}> <span
                                    key={color}

                                    style={{
                                        background: color,
                                        width: '20px',
                                        height: '20px',
                                        borderRadius: '100px'
                                    }}
                                ></span></div>
                            </div>
                            <div className="item" style={{ paddingBottom: '20px' }}>
                                <div className="start">Price</div>
                                <div className="end">{price}</div>
                            </div>
                        </div>
                        <div className="description">
                            <p>     {description}</p>
                        </div>

                        <div className='cart-button' onClick={() => {
                            if (token.token) {
                                navigate(`/frames/${id}/inquiry`);

                            }
                            else {
                                navigate(`/login`);
                            }
                        }}>
                            <button>Make Inquire</button>
                        </div>

                    </div>
                </div>

                {
                    product && <ImageDropZone framePiece={product} />
                }

                {/* <div>
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
                </div> */}

            </div>
            <Footer />
        </>

    )
}

export default ProductDetail