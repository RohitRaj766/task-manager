import React, { useState } from 'react'
import "./card.scss"

const Card = (props) => {
  const{Heading, TasksList} = props;
  const[UpdateModal, setUpdateModal] = useState(false)
  console.log(TasksList.message +" hello world")
  const colors = ['#FFC1C1', '#C1FFC1', '#C1C1FF', '#FFFFC1', '#C1FFFF'];

  const HandleModal = () => {
    setUpdateModal(true)
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
            <div className="task__container" style={{ backgroundColor: color }} onClick={handleModal}>
              {tasks.message} <br />
              {tasks.date} 
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Card
