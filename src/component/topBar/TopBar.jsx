import React from "react";
import { Link } from "react-router-dom";
import "./topBar.css";

const TopBar = () => {
  const  user = false;
  return (
    <div className="top">
      <div className="topLeft">
        <i className="topIcon fa-brands fa-square-facebook"></i>
        <i className="topIcon fa-brands fa-square-twitter"></i>
        <i className="topIcon fa-brands fa-square-pinterest"></i>
        <i className="topIcon fa-brands fa-square-instagram"></i>
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
            <Link className="link" to={'/'}>HOME</Link>
          </li>
          <li className="topListItem">
            <Link className="link" to={'/settings'}>ABOUT</Link>
          </li>
          <li className="topListItem">
            <Link className="link">CONTACT</Link>
          </li>
          <li className="topListItem">
            <Link className="link" to={'/write'}>WRITE</Link>
          </li>
        { user? <li className="topListItem">
            <Link className="link">LOGOUT</Link>
          </li> : null}
        </ul>
      </div>
      <div className="topRight">
        <ul className="topList">
       { user? null : <><li className="topListItem">
            <Link className="link" to={'/login'}>LOGIN</Link>
          </li>
          <li className="topListItem">
            <Link className="link" to={'/register'}>REGISTER</Link>
          </li></>}
        </ul>
       {user?  <img
          className="topImg"
          src="https://scontent.ffjr1-5.fna.fbcdn.net/v/t31.18172-8/28514967_2131106523787132_6968725589859296143_o.jpg?_nc_cat=111&ccb=1-7&_nc_sid=174925&_nc_ohc=JCdk43VpdZgAX88fWUD&_nc_ht=scontent.ffjr1-5.fna&oh=00_AfBMKcfYm3UC4gia3M7wMRl8IsDJ9LXeDZcqEQ0PAQBhKg&oe=64044913"
          alt=""
        /> : null}
        <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
      </div>
    </div>
  );
};

export default TopBar;
