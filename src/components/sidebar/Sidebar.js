import React, { useState, useEffect } from 'react';
import LogoBird from '../../assets/images/BigLogo.png';
import Circle from '../../assets/images/circle.png';
import './sidebar.scss';

const Sidebar = () => {
  const [selectedItem, setSelectedItem] = useState(1); // Default active item ID

  const sidebarItems = [
    { id: 1, name: 'Home' },
    { id: 2, name: 'About' },
    { id: 3, name: 'Works' }
  ];

  useEffect(() => {
    const items = document.querySelectorAll('.img__holder');
    items.forEach(item => {
      if (item.dataset.id === selectedItem.toString()) {
        item.classList.add('active');
      } else {
        item.classList.remove('active');
      }
    });
  }, [selectedItem]);

  const handleItemClick = (id) => {
    setSelectedItem(id);
  };
  
  return (
    <div className='side__bar'>
      <div className="img__holder">
        <img src={LogoBird} className='logo__sidebar' alt="Logo" height={50} width={50} />
      </div>
      {sidebarItems.map(item => (
        <div key={item.id} className="img__holder" data-id={item.id} onClick={() => handleItemClick(item.id)}>
          <img src={Circle} alt="Circle" />
          <p>{item.name}</p>
          {selectedItem === item.id && <hr />}
        </div>
      ))}
    </div>
  );
}

export default Sidebar;
