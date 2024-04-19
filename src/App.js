import './App.css';
import Header from './components/header/Header';
import Sidebar from './components/sidebar/Sidebar';
import Subheader from './components/sub-header/Subheader';
import Card from './components/card/Card';
// import Home from './components/home/home.jsx'
// import { useState } from 'react';

function App() {

  return (
    <div className="App">
    <Sidebar />
    <Header/>
    <Subheader />
    <div className="card__holder">
  <Card
    Heading={"Tasks To Do"}
  />
   <Card
    Heading={"In Progress"}
  /> 
  <Card
    Heading={"Tasks Done"}
  /> 
</div>
{/* <img src={Home} alt='home' style={{marginLeft:"200px", padding:"200px"}}/>
 */}
 {/* <Home/> */}
</div>
  );
}

export default App;
