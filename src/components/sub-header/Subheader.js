import React from 'react'
import "./subheader.scss"
import BigLogo from "../../assets/images/BigLogo.png"

const Subheader = () => {
  return (
    <div className='sub__header'>
        <div className="img__container">
            <img src={BigLogo} alt="" />
        </div> <span className='divider'></span>
        <div className="work__title">
        Website Development Tracker
        </div>
    </div>
  )
}

export default Subheader