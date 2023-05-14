import React from 'react'
import Navigation from '../components/Navigation'
import MainPannel from '../components/Pannel/MainPannel'
import Empty from '../components/Pannel/Empty'
const Pannel = () => {
  return (
    <div>
        <div>
            <Navigation/>
            
        </div>
        <div>
            <Empty/>
        </div>
    </div>
  )
}

export default Pannel