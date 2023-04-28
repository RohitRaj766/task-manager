import React, { useState } from 'react'
import "./modal.scss"

const Modal = (props) => {
    const {CloseModal, Distribute, GetData1, GetData2, GetData3} = props;
    const [ButtonForTasks, setButtonForTasks] = useState(1);
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
        Distribute(ButtonForTasks)
        if(ButtonForTasks === 1){
            GetData1(prevState => [...prevState, TaskText])
        }
        else if(ButtonForTasks === 2){
            GetData2(prevState => [...prevState, TaskText])
        }
        else if(ButtonForTasks === 3){
            GetData3(prevState => [...prevState, TaskText])
        }
        console.log(ButtonForTasks)
    }
    
    console.log(TaskText); // check TaskText value

  return (
    <div className='modal'>
        <div className="modal__container">
            <div className="title__modal">
            <span> Create a Task for team</span> <span onClick={handleClick}>X</span>
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
            {<button onClick={CreateTask}> Create task </button>
            // : ButtonForTasks === 2 ? <button > Update task </button> 
            // : ButtonForTasks === 3 ? <button > Delete task </button> : null
        }
            </div>
        </div>
    </div>
  )
}

export default Modal