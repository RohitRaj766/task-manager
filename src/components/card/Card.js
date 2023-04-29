import React, { useEffect, useState } from 'react';
import Modal from '../modal/Modal';
import './card.scss';

const Card = (props) => {
  const { Heading, TasksList, ModalToggler,} = props;
  const [UpdateModal, setUpdateModal] = useState(true);
  const [Flag, setFlag] = useState(false);
  const [DFlag, setDFlag] = useState(true);
  const [clickedData, setClickedData] = useState(null);
  const [UpClickedData, setUpClickedData] = useState(null);
  const colors = ['#FFD166', '#30B7E3', '#EF476F', '#06D6A0', '#F6D6B6', '#E8A6B6'];

  const HandleModal = (tasks, index) => {
   UpClickedData !==null ? setClickedData(UpClickedData) : setClickedData(tasks);
    setUpdateModal(true)
  }
useEffect(() => {
  if(Flag){
    setUpClickedData(clickedData);
  }
}, [clickedData, Flag]);

  return (
    <div className='card'>
      <div className="heading__title">
        <p>{Heading}</p>
      </div>
      <div className="task__holder">
        { DFlag && TasksList.map((tasks, index) => {
          const color = colors[index % colors.length];
          return (
            <div
              key={index}
              className="task__container"
              style={{ backgroundColor: color }}
              onClick={() => HandleModal(tasks, index)}
            >
              <p>{ UpClickedData !==null ? UpClickedData.message : tasks.message}</p>
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
          DataDFlag = {setDFlag}
        />
      )}
    </div>
  )
}

export default Card