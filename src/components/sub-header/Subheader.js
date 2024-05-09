import React from 'react'
import "./subheader.scss"
import BigLogo from "../../assets/images/bird-logo.png"

const Subheader = () => {
  return (
    <div className='sub__header'>
        <div className="img__container">
            <img src={BigLogo} alt="" height={80} width={120}/>
        </div> <span className='divider'></span>
        <div className="work__title">
         Productivity Tracker
        </div>
    </div>
  )
}

export default Subheader