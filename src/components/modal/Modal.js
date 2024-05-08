import axios from 'axios';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo, updateTodo, deleteTodo } from '../../redux/actions';
import './modal.scss';

const Modal = (props) => {
  const dispatch = useDispatch();

  const { CloseModal, cardData, closeUpModal, ToggleTasks, show } = props;
  const [TaskText, setTaskText] = useState({
    message: cardData? cardData.text : '',
    date: cardData?.date || '',
  });

  const handleInputChange = (event, keyToUpdate) => {
    const { value } = event.target;
    if (show) {
      ToggleTasks({ [keyToUpdate]: value });
    } else {
      setTaskText((prevState) => ({
        ...prevState,
        [keyToUpdate]: value,
      }));
    }
  };

  const handleClose = () => {
      if(closeUpModal) {
          closeUpModal(false);
        }
        if(CloseModal){

            CloseModal(false);
        }
  };

  const handleUpdate = () => {
    if (!TaskText.message || !TaskText.date) {
      alert('Please fill in all required fields marked with *');
      return;
    }
    dispatch(updateTodo(cardData.id, TaskText.message, TaskText.date));
    handleClose()
};

  const handleDelete = () => {
    dispatch(deleteTodo(cardData.id));
    handleClose()
  };

  const handleCreate = () => {
    if (!TaskText.message  || !TaskText.date) {
      alert('Please fill in all required fields marked with *');
      return;
    }
    dispatch(addTodo(Date.now(), TaskText.message, TaskText.date));
  };
  return (
    <div className='modal'>
      <div className="modal__container">
        <div className="title__modal">
          <span>{closeUpModal ? 'Edit Task' : 'Create Task'}</span>
          <span onClick={handleClose}>&times;</span>
        </div>
        <div className="write__task">
          <p>{closeUpModal ? 'Edit task description' : 'Add task description'}*</p>
          <textarea
            type="text"
            placeholder='feed the task guidelines and information'
            value={TaskText.message}
            onChange={(event) => handleInputChange(event, 'message')}
          />
        </div>
        {!closeUpModal && (
            <div className="due__date">
              <p>Due date*</p>
              <input
                type='date'
                value={TaskText.date}
                onChange={(event) => handleInputChange(event, 'date')}
              />
            </div>
        )}
        <div className='button__container'>
          <div className="button__box">
            {closeUpModal ? (
              <>
                <button className='Update__task__btn' onClick={handleUpdate}>Update</button>
                <button className='Delete__task__btn' onClick={handleDelete}>Delete</button>
              </>
            ) : (
              <button className='create__task__btn' onClick={handleCreate}>Create task</button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
