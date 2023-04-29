import React, { useRef, useEffect } from 'react'
import "./sidebar.scss"
import Circle from '../../assets/images/circle.png'
import LogoBird from '../../assets/images/logo-bird.png'

const Sidebar = () => {
  const imgRefs = useRef([]);
  const handleImgClick = (index) => {
    imgRefs.current.forEach((ref, i) => {
      if (i === index) {
        ref.classList.add('active');
      } else {
        ref.classList.remove('active');
      }
    });
  }

  useEffect(() => {
    imgRefs.current[1].classList.add('active');
  }, []);

  return (
    <div className='side__bar'>
       <div className="img__holder">
        <img src={LogoBird} alt="..." />
       </div>
       <div className="img__holder" ref={(el) => imgRefs.current[1] = el} onClick={() => handleImgClick(1)}>
        <img src={Circle} alt="..." />
        <p>Home</p>
        <hr />
       </div>
       <div className="img__holder" ref={(el) => imgRefs.current[2] = el} onClick={() => handleImgClick(2)}>
        <img src={Circle} alt="..." />
        <p>About</p>
        <hr />
       </div>
       <div className="img__holder" ref={(el) => imgRefs.current[3] = el} onClick={() => handleImgClick(3)}>
        <img src={Circle} alt="..." />
        <p>Works</p>
        <hr />
       </div>
       <div className="img__holder" ref={(el) => imgRefs.current[4] = el} onClick={() => handleImgClick(4)}>
        <img src={Circle} alt="..." />
        <p>Clients</p>
        <hr />
       </div>
    </div>
  )
}

export default Sidebar
