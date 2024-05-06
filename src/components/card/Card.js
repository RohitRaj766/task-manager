import React, { useState, useRef, useEffect } from "react";
import Modal from "../modal/Modal";
import ProgMod from "../progmod/progmod";
import "./card.scss";
import { useSelector } from "react-redux";
import Comple from "../complete/Complete";

const Card = ({ Heading }) => {
  const { tasks, searchQuery, inProgress, completedStore } = useSelector(
    (state) => state
  );
  const [selectedTask, setSelectedTask] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isProgModalOpen, setIsProgModalOpen] = useState(false);
  const [isCompModalOpen, setIsCompModalOpen] = useState(false);
  const taskHolderRef = useRef(null);
  const [closeUpModal, setCloseUpModal] = useState(false);

  const filteredTasks = tasks.filter((task) =>
    task.text.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredInProgress = inProgress.filter((task) =>
    task.text.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredCompletedStore = completedStore.filter((task) =>
    task.text.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleModal = (task) => {
    setSelectedTask(task);
    setIsModalOpen(true);
  };

  const handleProgModal = () => {
    setIsProgModalOpen(true);
  };

  const handleCompModal = () => {
    setIsCompModalOpen(true);
  };

  useEffect(() => {
    if (taskHolderRef.current) {
      taskHolderRef.current.scrollTop = taskHolderRef.current.scrollHeight;
    }
  }, [filteredTasks]);

  // const date = new Date().toLocaleString();
  return (
    <div className="card">
      <div className="heading__title">
        <p>{Heading}</p>{" "}
        {Heading === "In Progress" && (
          <button onClick={handleProgModal}>&#9997;</button>
        )}{" "}
        {Heading === "Tasks Done" && (
          <button onClick={handleCompModal}>&#9997;</button>
        )}
      </div>
      {Heading === "Tasks To Do" && (
        <div ref={taskHolderRef} className="task__holder">
          {filteredTasks.map((task, index) => {
            const colors = [
              "#FFD166",
              "#30B7E3",
              "#EF476F",
              "#06D6A0",
              "#F6D6B6",
              "#E8A6B6",
            ];
            const color = colors[index % colors.length];
            return (
              <div
                key={task.id}
                className="task__container"
                style={{ backgroundColor: color }}
              >
                <p>{task.text}</p>
                <span className="date">Due Date: {task.date}</span>
                <button onClick={() => handleModal(task)}>&#9997;</button>
              </div>
            );
          })}
        </div>
      )}

      {Heading === "In Progress" && (
        <div className="task__holder">
          {filteredInProgress.map((task, index) => {
            const colors = [
              "#FFD166",
              "#30B7E3",
              "#EF476F",
              "#06D6A0",
              "#F6D6B6",
              "#E8A6B6",
            ];
            const color = colors[index % colors.length];
            return (
              <div
                key={task.id}
                className="task__container"
                style={{ backgroundColor: color }}
              >
                <p>{task.text}</p>
                <span className="date">Due Date: {task.date}</span>
                {/* <span className='date'>Working: {date}</span>  */}
              </div>
            );
          })}
        </div>
      )}

      {Heading === "Tasks Done" && (
        <div className="task__holder">
          {filteredCompletedStore.map((task, index) => {
            const colors = [
              "#FFD166",
              "#30B7E3",
              "#EF476F",
              "#06D6A0",
              "#F6D6B6",
              "#E8A6B6",
            ];
            const color = colors[index % colors.length];
            return (
              <div
                key={task.id}
                className="task__container"
                style={{ backgroundColor: color }}
              >
                <p>{task.text}</p>
                <span className="date">Due Date: {task.date}</span>
                {/* <span className='date'>Task Completed: {date}</span>  */}
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
          compModal={setIsCompModalOpen}
        />
      )}
      {isCompModalOpen && <Comple compModal={setIsCompModalOpen} />}
    </div>
  );
};
export default Card;
