import React from 'react'
import './Scss/Upload.scss'
import MainPannel from './MainPannel'
import Navigation from '../Navigation'
import { Link } from 'react-router-dom'

const Upload = () => {

    return (
        <div>
            <Navigation />
            <div className='profile-parent'>
                <div>
                    <MainPannel />
                </div>
                <div>
                    <div className="professional-page">

                        <h1 className="welcome-heading">Welcome to your Artist Panel</h1>
                        <section className="button-section">
                            <Link to="/frame/upload" className="button">Upload Frame</Link>
                            <Link to="/artwork/upload" className="button">Upload Artwork</Link>
                        </section>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Upload