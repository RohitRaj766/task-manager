import React from 'react'
import Header from "../header/Header";
import Sidebar from "../sidebar/Sidebar";
import Subheader from "../sub-header/Subheader";
import Card from "../card/Card";
import './views.scss'
function Works() {
  return (
    <div className='works'>
      <Header />
      <Subheader />
      <div className="card__holder">
        <Card Heading={"Tasks To Do"} />
        <Card Heading={"In Progress"} />
        <Card Heading={"Tasks Done"} />
      </div>
    </div>
  )
}

export default Works