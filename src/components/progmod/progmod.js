import React, { useState, useEffect } from "react";
import "./progmod.scss";
import { useSelector, useDispatch } from "react-redux";
import { inProgress, deleteTodo } from "../../redux/actions";

const Progmod = ({ progModal }) => {
  const tasklist = useSelector((state) => state.tasks);
  const inprogr = useSelector((state) => state.inProgress);
  const dispatch = useDispatch();
  const [selectedTasks, setSelectedTasks] = useState([]);

  const handleCheckboxChange = (event) => {
    const task = JSON.parse(event.target.value);
    const isChecked = event.target.checked;

    if (isChecked && inprogr.some((item) => item.id === task.id)) {
      return;
    }

    setSelectedTasks((prevSelectedTasks) => {
      if (
        isChecked &&
        !prevSelectedTasks.some((selectedTask) => selectedTask.id === task.id)
      ) {
        return [...prevSelectedTasks, task];
      }
      if (!isChecked) {
        return prevSelectedTasks.filter(
          (selectedTask) => selectedTask.id !== task.id
        );
      }
      return prevSelectedTasks;
    });
  };

  const handleProgmod = () => {
    progModal(false);
  };

  const handleSaveInProgress = () => {
    dispatch(inProgress(selectedTasks));
    selectedTasks.forEach((item) => {
      dispatch(deleteTodo(item.id));
    });
    progModal(false);
  };

  return (
    <div className="modal">
      <div className="modal__container">
        <div className="title__modal">
          <span>In Progress</span>
          <span onClick={handleProgmod}>&times;</span>
        </div>
        <div className="write__task">
          <p>Select In progress tasks</p>
        </div>
        <div>
          {tasklist && (
            <div className="prog__item__container">
              {tasklist.map((item) => (
                <div key={item.id} className="prog__item__list">
                  <input
                    type="checkbox"
                    id={`checkbox-${item.id}`}
                    name="taskCheckbox"
                    value={JSON.stringify(item)}
                    onChange={handleCheckboxChange}
                    checked={selectedTasks.some(
                      (selectedTask) => selectedTask.id === item.id
                    )}
                  />
                  <label htmlFor={`checkbox-${item.id}`}>
                    <p>{item.text}</p>
                    <p>Date : {item.date}</p>
                  </label>
                </div>
              ))}
            </div>
          )}
        </div>
        <div className="button__container">
          <div className="button__box">
            <button
              className="create__task__btn"
              onClick={handleSaveInProgress}
            >
              Add In progress
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Progmod;
