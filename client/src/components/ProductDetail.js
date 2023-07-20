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
import ImageCard from './ImageCard'
import Editor from './Editor'
const ProductDetail = () => {
    const [value, setValue] = useState();
    const { id } = useParams();
    const product = useSelector((state) => state.ProductDetails.product);
    const { image, title, description, category, price } = product || {};
    const token = useSelector((state) => state.UserLogin.userInfo) || {};
    const dispatch = useDispatch();
    const navigate = useNavigate();

    window.scroll(0, 0);

    useEffect(() => {
        dispatch(getSingleProduct(id));
    }, [dispatch, id]);

    return (
        <>
            <Navigation />

            <div className='product-detail-parent'>
                {/* NAVUGATION START HERE */}

                <div className='detail'>

                    <div className='pic-frame'>
                        <div className='frame frame__three'>
                            {
                                product.patch ? <ImageCard rod={product} /> : <img style={{ width: '100%' }} src={product.image} alt="" />
                            }

                        </div>

                        <div className="detail-description">
                            <h3>Description</h3>

                            <p>{description}
                            </p>


                        </div>
                    </div>

                    <div className='product-detail-review'>


                        <h3>{title}</h3>

                        <div className="specs">

                            <div className="item">
                                <div className="start">Category</div>
                                <div className="end">{category && category.name}</div>
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
                    product && <Editor framePiece={product} />
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