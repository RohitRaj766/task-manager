import React, { useState } from 'react';
import Modal from '../modal/Modal';
import './card.scss';
import { useSelector } from 'react-redux';

const Card = ({ Heading }) => {
  const { tasks, searchQuery } = useSelector(state => state);
  const [selectedTask, setSelectedTask] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filteredTasks = searchQuery.length > 0 ? tasks.filter(task =>
    task.text.toLowerCase().includes(searchQuery.toLowerCase())
  ) : tasks;

  const handleModal = (task) => {
    setSelectedTask(task);
    setIsModalOpen(true);
  };

  return (
    <div className='card'>
      <div className="heading__title">
        <p>{Heading}</p>
      </div>
      { (Heading === "Tasks To Do" || Heading === "Filtered Tasks") && <div className="task__holder">
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
      { isModalOpen && selectedTask &&  
        <Modal 
          cardData={selectedTask}
          CloseModal={setIsModalOpen}  // Make sure to handle CloseModal correctly in the Modal component
        /> 
      }
    </div>
  );
}

export default Card;
