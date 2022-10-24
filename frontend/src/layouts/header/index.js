import './index.scss';

import React from 'react'
import { AiFillCaretDown } from 'react-icons/ai'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import { logout } from '../../actions/authenticate';

function HeaderMaster() {

  const dispatch = useDispatch();
  const userId = localStorage.getItem("Auth:user");
  const listUser = useSelector((state) => state.authenticate.listUser);
  const userName = listUser.find((item) => item.id === +userId).userName;

  const handleSignoutClick = (e) => {
    e.preventDefault();
    dispatch(logout());
    window.location.reload();
  };

  return (
    <div className="layout_header">
        <div className="header-left">
          <img
            className="logo"
            src="https://cdn1.dotesports.com/wp-content/uploads/2019/10/08064645/image-7.png"
          />

          <ol className="nav-item">
            <li className="nav-link">
             <Link to='/'>Home</Link>
            </li>
            <li className="nav-link">
              <Link to='/about-us'>About us</Link>
            </li>
            <li className="nav-link">
              <Link to='contact'>Contact
              </Link>
            </li>
          </ol>
        </div>
        <div className="header-right">
          <p className="nav-item">
            {userName}
            <AiFillCaretDown className="dropdown-icon" />
            <ul className="dropdown-menu">
              <li className="dropdown-item">
                <a href="#">User information</a>
              </li>
              <div className="overline"></div>
              <li className="dropdown-item">
                <a href="#" onClick={handleSignoutClick}>
                  Logout
                </a>
              </li>
            </ul>
          </p>
        </div>
      </div>
  )
}

export default HeaderMaster