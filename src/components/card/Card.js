import React, { useState } from 'react';
// import Modal from '../modal/Modal';
import './card.scss';

const Card = (props) => {
  const { Heading, TasksList} = props;
  const colors = ['#FFD166', '#30B7E3', '#EF476F', '#06D6A0', '#F6D6B6', '#E8A6B6'];


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
              
            >
              <p>{tasks.message}</p>
              <span className='date'>Due Date :</span>{`${tasks.date}`}
              <button onClick={() => 
                // HandleModal(tasks, index) 
                ""
              }>&#9997;</button>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Card