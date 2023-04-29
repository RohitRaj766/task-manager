import React, { useState } from 'react'
import "./card.scss"

const Card = (props) => {
  const{Heading, TasksList, ModalToggler,setShowModal } = props;
  const[UpdateModal, setUpdateModal] = useState(false)
  console.log(TasksList.message +" hello world")
  const colors = ['#FFD166', '#30B7E3', '#EF476F', '#06D6A0', '#F6D6B6','#E8A6B6'];

  const HandleModal = () => {
    // setUpdateModal(true)
    // ModalToggler(UpdateModal)
    // setShowModal(true)
  }


  return (
    <div className='card'>
      <div className="heading__title">
        <p>{Heading}</p>
      </div>
      <div className="task__holder">
        {TasksList.map((tasks, index)=>{
          const color = colors[index % colors.length];
          return (
            <div className="task__container" style={{ backgroundColor: color }} onClick={HandleModal}>
             <p>{tasks.message}</p>
             <span className='date'>Due Date :</span>{`${tasks.date}`} 
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Card
