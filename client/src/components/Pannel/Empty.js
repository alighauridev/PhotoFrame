import React from 'react'
import './Scss/Empty.scss'
import MainPannel from './MainPannel'
const Empty = () => {
  return (
  <div className='empty-pannel'>
    <div>
        <MainPannel/>
    </div>
    <div className='welcome'>
        <h1>Welcome To Dashboard</h1>
    </div>
  </div>
  )
}

export default Empty