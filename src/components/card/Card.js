import React, { useState } from 'react';
import Modal from '../modal/Modal';
import './card.scss';

const Card = (props) => {
  const { Heading, TasksList, ModalToggler,} = props;
  const [UpdateModal, setUpdateModal] = useState(true);
  const [Flag, setFlag] = useState(false);
  const [clickedData, setClickedData] = useState(null);
  const colors = ['#FFD166', '#30B7E3', '#EF476F', '#06D6A0', '#F6D6B6', '#E8A6B6'];

  const HandleModal = (tasks) => {
    setClickedData(tasks);
    setUpdateModal(true)
    console.log(tasks)
  }
console.log(`${clickedData && clickedData.message} Toogle taksssssss`)
  return (
    <div className='card'>
      <div className="heading__title">
        <p>{Heading}</p>
      </div>
      <div className="task__holder">
        {TasksList.map((tasks, index) => {
          const color = colors[index % colors.length];
          return (
            <div
              key={index}
              className="task__container"
              style={{ backgroundColor: color }}
              onClick={() => HandleModal(tasks)}
            >
              <p>{Flag ? clickedData.message : tasks.message}</p>
              <span className='date'>Due Date :</span>{`${tasks.date}`}
            </div>
          )
        })}
      </div>
      {clickedData && UpdateModal && (
        <Modal
          show={UpdateModal}
          onHide={setUpdateModal}
          tasks={clickedData}
          ToggleTasks={setClickedData}
          DataFlag = {setFlag}
        />
      )}
    </div>
  )
}

export default Card