import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LogoBird from '../../assets/images/BigLogo.png';
import Circle from '../../assets/images/circle.png';
import './sidebar.scss';

const Sidebar = () => {
  const [selectedItem, setSelectedItem] = useState(1); // Default active item ID
  const navigate = useNavigate(); // Hook for navigation

  const sidebarItems = [
    { id: 1, name: 'Home', path: '/' },
    { id: 2, name: 'About', path: '/about' },
    { id: 3, name: 'Works', path: '/works' }
  ];

  const handleItemClick = (id, path) => {
    setSelectedItem(id);
    navigate(path); 
  };
// const navigate2= ()=>{
//   navigate("/works")
// }
  return (
    <div className='side__bar'>
      <div className="img__holder">
        <img src={LogoBird} className='logo__sidebar' alt="Logo" height={50} width={50} onClick={"navigate2"}/>
      </div>
      {sidebarItems.map(item => (
        <div key={item.id} className="img__holder" data-id={item.id} onClick={() => handleItemClick(item.id, item.path)}>
          <img src={Circle} alt="Circle" />
          <p>{item.name}</p>
          {selectedItem === item.id && <hr/>}
        </div>
      ))}
    </div>
  );
}

export default Sidebar;
