import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import LogoBird from '../../assets/images/BigLogo.png';
import Circle from '../../assets/images/circle.png';
import './sidebar.scss';

const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  
  const sidebarItems = [
    { id: 1, name: 'Home', path: '/' },
    { id: 2, name: 'About', path: '/about' },
    { id: 3, name: 'Works', path: '/works' }
  ];
 
  const isActive = (path) => location.pathname === path;  

  return (
    <div className='side__bar'>
      <div className="img__holder">
        <img src={LogoBird} className='logo__sidebar' alt="Logo" height={50} width={50} />
      </div>
      {sidebarItems.map(item => (
        <div
          key={item.id}
          className={`img__holder ${isActive(item.path) ? 'active' : ''}`}
          onClick={() => navigate(item.path)}
        >
          <img src={Circle} alt="Circle" />
          <p>{item.name}</p>
          {isActive(item.path) && <hr />}
        </div>
      ))}
    </div>
  );
}

export default Sidebar;
