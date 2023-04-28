import React, { useState } from 'react'
import './header.scss'
import Modal from '../modal/Modal'

const Header = (props) => {
    const{ModalSubmit,GetModalData, Distribute, GetData1, GetData2, GetData3} = props
    const [ShowModal, setShowModal] = useState(false)
    const handleClick = () => {
        setShowModal(true)
    }
  return (
    <div className='header'>
        <div className="header__container">
            <div className="left__section">
                <div className="task__button">
                    <button onClick={handleClick}>
                        + Create Task
                    </button>
                </div> |
                    <div className="search__bar">
                        <input type="text" placeholder='search'/><span> o`</span>
                    </div>
            </div>
            <div className="right__section">
                <div className="name__designation__holder">
                    John | Senior Developer
                </div>
                <div className="img__holder">
                    img
                </div>
                <div className="drop__menu">
                ↓
                </div>
            </div>
        </div>
        {
            ShowModal && 
            <Modal 
               CloseModal = {setShowModal}
               ModalSubmit = {ModalSubmit}
               GetModalData = {GetModalData}
               Distribute = {Distribute}
               GetData1 = {GetData1}
               GetData2 = {GetData2}
               GetData3 = {GetData3}
            />
        }
    </div>
  )
}

export default Header