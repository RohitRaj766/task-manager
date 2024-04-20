import React, { useState, useRef, useEffect } from 'react';
import Modal from '../modal/Modal';
import ProgMod from '../progmod/progmod'
import './card.scss';
import { useSelector } from 'react-redux';

const Card = ({ Heading }) => {
  const { tasks, searchQuery, inProgress } = useSelector(state => state);
  const [selectedTask, setSelectedTask] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isProgModalOpen, setIsProgModalOpen] = useState(false);
  const taskHolderRef = useRef(null); 
  const[closeUpModal , setcloseUpModal] = useState(false);

  const filteredTasks = searchQuery.length > 0 ? tasks.filter(task =>
    task.text.toLowerCase().includes(searchQuery.toLowerCase())
  ) : tasks;
  console.log("inprogesssssss:", inProgress)

  const handleModal = (task) => {
    setSelectedTask(task);
    setIsModalOpen(true);
  };

  const handleProgModal = () =>{
    setIsProgModalOpen(true)
    console.log("isProgModalOpen ",isProgModalOpen)
  }

  useEffect(() => {
    if (taskHolderRef.current) {
      taskHolderRef.current.scrollTop = taskHolderRef.current.scrollHeight;
    }
  }, [filteredTasks]);
  

  return (
    <div className='card'>
      <div className="heading__title">
        <p>{Heading}</p> {Heading === "In Progress" && <button onClick={()=>handleProgModal()}>&#9997;</button>}
      </div>
      { (Heading === "Tasks To Do") && <div ref={taskHolderRef} className="task__holder">
        {filteredTasks.map((task, index) => {
          const colors = ['#FFD166', '#30B7E3', '#EF476F', '#06D6A0', '#F6D6B6', '#E8A6B6'];
          const color = colors[index % colors.length];
          return (
            <div
              key={task.id}
              className="task__container"
              style={{ backgroundColor: color }}
            >
              <p>{task.text}</p>
              <span className='date'>Due Date: {task.date}</span>
              <button onClick={() => handleModal(task)}>&#9997;</button>
            </div>
          )
        })}
      </div>}
      { (Heading === "In Progress") && <div ref={taskHolderRef} className="task__holder">
        {inProgress.map((task, index) => {
          const colors = ['#FFD166', '#30B7E3', '#EF476F', '#06D6A0', '#F6D6B6', '#E8A6B6'];
          const color = colors[index % colors.length];
          return (
            <div
              key={task.id}
              className="task__container"
              style={{ backgroundColor: color }}
            >
              <p>{task.text}</p>
              <span className='date'>Due Date: {task.date}</span>
              {/* <button onClick={() => handleModal(task)}>&#9997;</button> */}
            </div>
          )
        })}
      </div>}
      
      {(isModalOpen && selectedTask) && (  
      <Modal 
        cardData={selectedTask}
        CloseModal={setIsModalOpen}
        closeUpModal={setcloseUpModal}
      /> 
      )}
      { isProgModalOpen && 
      <ProgMod
       progModal={setIsProgModalOpen}
      />

      }
    </div>
  );
}

export default Card;
