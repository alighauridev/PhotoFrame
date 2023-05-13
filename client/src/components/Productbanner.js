import React from 'react'
import '../scss/Productbanner.scss'
import banner from '../assests/productbanner.jpg'
const Productbanner = () => {
  return (
    <div className="product-banner-parent">
        <div className='seller'>
            <h1>Best-Seller Picture Frames</h1>
            <p>Enrich your space with our vast selection of tried-and-true picture frames, available in a lively array of customizable sizes. From sleek to ornate, our Best-Selling picture frames are handmade by us and handpicked by you, making for a customer-approved collection that’s sure to have just what you need.</p>
        </div>
        <div>
            <img src={banner} alt="" />
        </div>
    </div>
  )
}

export default Productbanner