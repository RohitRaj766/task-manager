import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setSearchQuery } from "../../redux/actions";
import Plus from "../../assets/images/plus.png";
import Search from "../../assets/images/search.png";
import Profile from "../../assets/images/profile.png";
import Logout from "../../assets/images/logout.png";
import Modal from "../modal/Modal";
import "./header.scss";

const Header = () => {
  const dispatch = useDispatch();
  const [openDropdown, setOpenDropdown] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  const handleSearch = (event) => {
    dispatch(setSearchQuery(event.target.value));
  };
  const handleClick = () => {
    setOpenModal(true);
  };

  return (
    <div className="header">
      <div className="header__container">
        <div className="left__section">
          <div className="task__button" onClick={handleClick}>
            <img src={Plus} alt="..." />
            <button>Create Task</button>
          </div>
          <span className="divider"></span>
          <div className="search__bar">
            <input
              type="text"
              placeholder="Search"
              onChange={handleSearch}
            />{" "}
            <p className="search">
              {" "}
              <img src={Search} alt="..." />
            </p>
          </div>
        </div>
        <div className="right__section">
          <div className="name__designation__holder">
            John | Senior Developer
          </div>
          <div className="img__holder">
            <img src={Profile} alt="..." />
          </div>
          <div
            className="drop__menu"
            onClick={() => setOpenDropdown(!openDropdown)}
          >
            <img src={Logout} alt="..." />
            {/* {openDropdown && (
              <ul type="none" className="dropdown__list">
                <li>Profile</li>
                <li>Setting</li>
                <li>Logout</li>
              </ul>
            )} */}
          </div>
        </div>
      </div>
      {openModal && <Modal CloseModal={setOpenModal} />}
    </div>
  );
};

export default Header;
