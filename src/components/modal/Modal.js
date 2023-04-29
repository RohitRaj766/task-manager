import React, { useState } from 'react'
import "./modal.scss"

const Modal = (props) => {
    const {CloseModal, Distribute, GetData1, GetData2, GetData3, ModalToggler,} = props;
    const [ButtonForTasks, setButtonForTasks] = useState();
    const [TaskText, setTaskText] = useState({});
    
    console.log(`${TaskText.message} message`);
    
    const handleInputChange = (event, keyToUpdate) => {
        const { value } = event.target;
        
        setTaskText((prevState) => ({
          ...prevState,
          [keyToUpdate]: value
        }));
      };
    
    const handleClick = () =>{
        CloseModal(false);
    }

        
    const CreateTask = () => {
        // Validation checks
        if (!TaskText.message || !ButtonForTasks || !TaskText.date) {
            alert('Please fill in all required fields marked with *');
            return;
        }
        
        Distribute(ButtonForTasks);
        if (ButtonForTasks === 1) {
            GetData1(prevState => [...prevState, TaskText]);
        } else if (ButtonForTasks === 2) {
            GetData2(prevState => [...prevState, TaskText]);
        } else if (ButtonForTasks === 3) {
            GetData3(prevState => [...prevState, TaskText]);
        }
    };
     

    console.log(TaskText); // check TaskText value
    console.log(`${ModalToggler} in  modal`); // check TaskText value

  return (
    <div className='modal'>
        <div className="modal__container">
            <div className="title__modal">
            <span> Create a Task for team</span> <span onClick={()=>{handleClick()}}>X</span>
            </div>
            <div className="write__task">
                <p> Add task description* </p>
                <textarea type="text" placeholder='feed the task here' onChange={(event) => handleInputChange(event, 'message')}/>
            </div>
                <p className='status__heading'> Select Task Status*</p>
                  <div className="task__status">
                <div className="to__do">
                <input type="radio" name="my-radio" value="1" onClick={() => setButtonForTasks(1)}/>
                    <span>To do</span>
                </div>
                <div className="in__progress">
                    <input type="radio"  name="my-radio" value="2" onClick={() => setButtonForTasks(2)} /> <span> In progress</span>
                </div>
                <div className="tasks__done">
                    <input type="radio" name="my-radio" value="3" onClick={() => setButtonForTasks(3)} /> <span> Task done</span>
                </div>
            </div>
            <div className="due__date">
                <p> Due date*</p>
                <input type='date'  onChange={(event) => handleInputChange(event, 'date')} />
            </div>
            <div className="button__box">
            {
                
                ModalToggler ? 
                <>
                <button onClick={CreateTask}> Update</button> 
                <button onClick={CreateTask}> Delete </button> 
                </>
                :
                <button className='create__task__btn' onClick={CreateTask}> Create task </button> 
            }
        
            </div>
        </div>
    </div>
  )
}

export default Modal