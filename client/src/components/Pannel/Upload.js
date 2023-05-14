import React from 'react'
import './Scss/Upload.scss'
import MainPannel from './MainPannel'
import Navigation from '../Navigation'

const Upload = () => {

    return (
       <div>
        <Navigation/>
        <div className='profile-parent'>
                <div>
                    <MainPannel />
                </div>
               <div>
               <div className='profile-img'>
                
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
                       
                      
                    <div className='user-name'>
                    <div>
                            <span>Select the category:</span>
                            
                        </div>
                        <div>
                        <select name="" id="">
                        <option value="">Option First</option>
                        <option value="">Option Second</option>
                        <option value="">Option THird</option>
                        </select>
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
       </div>
    )
}

export default Upload