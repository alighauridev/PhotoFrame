import React,{Fragment} from 'react'

import Navigation from '../Navigation'
import { Link } from 'react-router-dom'
import MainPannel from './MainPannel'
const ArtWork = () => {
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
                    <td><button>Approved</button></td>
                </tr>
            </table>
        </div>
       </div>
    </Fragment>
  )
}

export default ArtWork