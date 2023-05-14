import React, { Fragment } from 'react'
import './Scss/Profile.scss'
import MainPannel from './MainPannel'
import Navigation from '../Navigation'
import { AiOutlineUser } from 'react-icons/ai'
const Profile = () => {
    return (
        <Fragment>
            <Navigation />
            <div className='profile-parent'>
                <div>
                    <MainPannel />
                </div>
               <div>
               <div className='profile-img'>
                    <div className='img'>
                        <div className='user-icon'>
                        <AiOutlineUser className='icon' />
                        </div>
                  
                        <div>
                        <h1>Profile</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, sapiente!</p>
                        </div>
                    </div>
                    <div className='save-canel'>
                        <button className='cancel'>Cancel</button>
                        <button className='save'>Save</button>
                    </div>
                </div>
                <div className='user-name-parent'>
                    <div className='user-name'>
                        <div>
                            <span>Username:</span>
                            
                        </div>
                        <div>
                        <input type="text" placeholder='enter your username' />
                        </div>
                    </div>
                    <div className='user-name'>
                        <div>
                            <span>Enter Your Website:</span>
                            
                        </div>
                        <div>
                        <input type="text" placeholder='enter your Website' />
                        </div>
                    </div>
                  
                </div>
            
                <div className='upload-photo'>
                        <div style={{marginLeft:"80px"}}>
                            <span>Upload Your Photo : </span>
                            
                        </div>
                        <div>
                        <input type="file"/>
                        </div>
                        <div className='save-canel '>
                        <button className='cancel'>Cancel</button>
                        <button className='save'>Update</button>
                        </div>
                    </div>
                </div>
               
            </div>
        </Fragment>
    )
}

export default Profile