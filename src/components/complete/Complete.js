import React, { useState, useEffect } from "react";
// import "./Complete.scss";
import { useSelector, useDispatch } from "react-redux";
import { completed, inProgress, removeTasks } from "../../redux/actions";

const Complete = ({ compModal }) => {
  const tasklist = useSelector((state) => state.inProgress);
  const completedList = useSelector((state) => state.completedStore);
  const dispatch = useDispatch();
  const [completedTasks, setCompletedTasks] = useState([]);

  const handleCheckboxChange2 = (event) => {
    const task = JSON.parse(event.target.value);
    const isChecked = event.target.checked;

    if (isChecked && completedList.some((item) => item.id === task.id)) {
      return;
    }

    setCompletedTasks((prevCompletedTasks) => {
      if (
        isChecked &&
        !prevCompletedTasks.some(
          (completedTask) => completedTask.id === task.id
        )
      ) {
        return [...prevCompletedTasks, task];
      }
      if (!isChecked) {
        return prevCompletedTasks.filter(
          (completedTask) => completedTask.id !== task.id
        );
      }
      return prevCompletedTasks;
    });
  };

  const handleComplete = () => {
    compModal(false);
  };

  const handleSaveComplete = () => {
    dispatch(completed(completedTasks));
    completedTasks.forEach((item) => {
      dispatch(removeTasks(item.id));
    });
    compModal(false);
  };

  return (
    <div className="modal">
      <div className="modal__container">
        <div className="title__modal">
          <span>Choose Below.</span>
          <span onClick={handleComplete}>&times;</span>
        </div>
        <div className="write__task">
          <p>Select Completed Tasks</p>
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
                    onChange={handleCheckboxChange2}
                    checked={completedTasks.some(
                      (completedTask) => completedTask.id === item.id
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
            <button className="create__task__btn" onClick={handleSaveComplete}>
              Add as Completed
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Complete;
