import React from "react";
import "./topBar.css";

const TopBar = () => {
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
          <li className="topListItem">HOME</li>
          <li className="topListItem">ABOUT</li>
          <li className="topListItem">CONTACT</li>
          <li className="topListItem">WRITE</li>
          <li className="topListItem">LOGOUT</li>
        </ul>
      </div>
      <div className="topRight">
        <img
          className="topImg"
          src="https://scontent.ffjr1-5.fna.fbcdn.net/v/t31.18172-8/28514967_2131106523787132_6968725589859296143_o.jpg?_nc_cat=111&ccb=1-7&_nc_sid=174925&_nc_ohc=JCdk43VpdZgAX88fWUD&_nc_ht=scontent.ffjr1-5.fna&oh=00_AfBMKcfYm3UC4gia3M7wMRl8IsDJ9LXeDZcqEQ0PAQBhKg&oe=64044913"
          alt=""
        />
        <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
      </div>
    </div>
  );
};

export default TopBar;
