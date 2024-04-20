import React from 'react';
import './progmod.scss';
import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import { inProgress } from '../../redux/actions';

const Progmod = ({ progModal }) => {
    const tasklist = useSelector(state => state);
    console.log("tsklist ", tasklist);

    const dispatch = useDispatch();
   
    const [selectedTasks, setSelectedTasks] = useState(new Set());

    const handleCheckboxChange = (event) => {
        const taskId = event.target.value;
        console.log('Task ID:', taskId); // Debug log to check the taskId
        setSelectedTasks(prev => {
            const newSet = new Set(prev);
            if (newSet.has(taskId)) {
                newSet.delete(taskId);
            } else {
                newSet.add(taskId);
            }
            console.log('Selected tasks:', Array.from(newSet)); // Debug log to check selected tasks
            return newSet;
        });
    };

    const handleProgmod = () => {
        progModal(false);
    };

    const handleSaveInProgress = () => {
        const selectedTaskIds = Array.from(selectedTasks); // Convert Set to array
        console.log('Saving In-Progress Tasks:', selectedTaskIds);
        dispatch(inProgress(selectedTaskIds)); // Dispatch the correct payload
        console.log('Saved In-Progress Tasks');
        progModal(false);
    };

    return (
        <div className='modal'>
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
                        <div className='prog__item__container'>
                            {tasklist.tasks.map((item) => (
                                <div key={item.id} className='prog__item__list'>
                                    <input 
                                        type="checkbox" 
                                        id={`checkbox-${item.id}`} 
                                        name="taskCheckbox" 
                                        value={item.id} 
                                        onChange={handleCheckboxChange}
                                        checked={selectedTasks.has(item.id)}
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
                <div className='button__container'>
                    <div className="button__box">
                        <button className='create__task__btn' onClick={handleSaveInProgress}>Add In progress</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Progmod;
