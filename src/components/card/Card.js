import React, { useState, useRef, useEffect } from 'react';
import Modal from '../modal/Modal';
import ProgMod from '../progmod/progmod';
import './card.scss';
import { useSelector } from 'react-redux';

const Card = ({ Heading }) => {
  const { tasks, searchQuery, inProgress } = useSelector(state => state);
  const [selectedTask, setSelectedTask] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isProgModalOpen, setIsProgModalOpen] = useState(false);
  const taskHolderRef = useRef(null);
  const [closeUpModal, setCloseUpModal] = useState(false);

  const filteredTasks = searchQuery.length > 0 ? tasks.filter(task =>
    task.text.toLowerCase().includes(searchQuery.toLowerCase())
  ) : tasks;

  const handleModal = (task) => {
    setSelectedTask(task);
    setIsModalOpen(true);
  };

  const handleProgModal = () => {
    setIsProgModalOpen(true);
  };

  useEffect(() => {
    if (taskHolderRef.current) {
      taskHolderRef.current.scrollTop = taskHolderRef.current.scrollHeight;
    }
  }, [filteredTasks]);

  useEffect(() => {
    console.log("In Progress IDs:", inProgress);
  }, [inProgress]);

  return (
    <div className='card'>
      <div className="heading__title">
        <p>{Heading}</p> {Heading === "In Progress" && <button onClick={handleProgModal}>&#9997;</button>}
      </div>
      {Heading === "Tasks To Do" && (
        <div ref={taskHolderRef} className="task__holder">
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
            );
          })}
        </div>
      )}

{Heading === "In Progress" && (
  <div className="task__holder">
    {Object.values(inProgress).map((task, index) => { // Convert object values to an array
      console.log("In Progress Task:", task); // Log the task object
      const colors = ['#FFD166', '#30B7E3', '#EF476F', '#06D6A0', '#F6D6B6', '#E8A6B6'];
      const color = colors[index % colors.length]; // Determine the background color
      return (
        <div
          key={task.id} // Use the task id as the key for React elements
          className="task__container"
          style={{ backgroundColor: color }} // Apply the background color
        >
          <p>{task.text}</p> 
          <span className='date'>Due Date: {task.date}</span> 
        </div>
      );
    })}
  </div>
)}





      {isModalOpen && selectedTask && (
        <Modal
          cardData={selectedTask}
          CloseModal={setIsModalOpen}
          closeUpModal={setCloseUpModal}
        />
      )}

      {isProgModalOpen && (
        <ProgMod
          progModal={setIsProgModalOpen}
        />
      )}
    </div>
  );
}

export default Card;
