import './App.css';
import Header from './components/header/Header';
import Sidebar from './components/sidebar/Sidebar';
import Subheader from './components/sub-header/Subheader';
import Card from './components/card/Card';
import { useState } from 'react';


function App() {


  const [TaskList1, setTaskList1] = useState([])
  const [TaskList2, setTaskList2] = useState([])
  const [TaskList3, setTaskList3] = useState([])
  const [ModalHandler, setModalHandler] =  useState(false)
  const [ShowModal, setShowModal] = useState(false)
  const [DataDistribution, setDataDistribution] = useState("")


console.log(`${TaskList1} tasklist APP`)

  



  return (
    <div className="App">
    <Sidebar />
    <Header 
    Distribute = {setDataDistribution}
    GetData1 = {setTaskList1}
    GetData2 = {setTaskList2}
    GetData3 = {setTaskList3}
    ModalToggler = {ModalHandler}
    SetShowModal = {setShowModal}
    />
    <Subheader />
    <div className="card__holder">
  <Card
    Heading={"Tasks To Do"}
    TasksList = {TaskList1}
    ModalToggler = {setModalHandler}
    ModalHan = {setShowModal}
  />
  <Card
    Heading={"In Progress"}
    TasksList = {TaskList2}
  />
  <Card
    Heading={"Tasks Done"}
    TasksList = {TaskList3}
  />
</div>

    </div>
  );
}

export default App;
