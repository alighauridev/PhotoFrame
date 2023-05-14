import React, { Fragment } from 'react'
import Navigation from '../Navigation'
import MainPannel from './MainPannel'
import './Scss/Inquiry.scss'
const Inquiry = () => {
  return (
    <Fragment>
        <Navigation/>
       <div className='inquiry-parent'>
       <div>
            <MainPannel/>
        </div>
        <div>
            <table >
                <tr>
                    <td>Title</td>
                    <td>Image</td>
                    <td>Price</td>
                    <td>Detail</td>
                    <td><button>Inquiry</button></td>
                </tr>
            </table>
        </div>
       </div>
    </Fragment>
  )
}

export default Inquiry