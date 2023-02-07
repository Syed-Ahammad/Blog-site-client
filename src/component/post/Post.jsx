import React from "react";
import "./post.css";

const Post = () => {
  return (
    <div className="post">
      <img
        src="https://daohe976vliu1.cloudfront.net/wp-content/uploads/2016/08/o-nature-baby-facebook-600x300.jpg"
        alt=""
        className="postImg"
      />
      <div className="postInfo">
        <div className="postCats">
            <span className="postCat">Music</span>
            <span className="postCat">Life</span>
        </div>
        <span className="postTitle">
            Lorem ipsum dolor sit amet consectetur.
        </span>
        <hr />
        <span className="postDate">1 hr ago</span>
        <p className="postDesc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure repellat amet nisi soluta reprehenderit quas odit placeat vero, atque omnis minima, consectetur sapiente consequuntur, nihil tempora possimus excepturi incidunt culpa?orem ipsum dolor sit amet consectetur adipisicing elit. Iure repellat amet nisi soluta reprehenderit quas odit placeat vero, atque omnis minima, consectetur sapiente consequuntur, nihil tempora possimus excepturi incidunt culpa?orem ipsum dolor sit amet consectetur adipisicing elit. Iure repellat amet nisi soluta reprehenderit quas odit placeat vero, atque omnis minima, consectetur sapiente consequuntur, nihil tempora possimus excepturi incidunt culpa?orem ipsum dolor sit amet consectetur adipisicing elit. Iure repellat amet nisi soluta reprehenderit quas odit placeat vero, atque omnis minima, consectetur sapiente consequuntur, nihil tempora possimus excepturi incidunt culpa?orem ipsum dolor sit amet consectetur adipisicing elit. Iure repellat amet nisi soluta reprehenderit quas odit placeat vero, atque omnis minima, consectetur sapiente consequuntur, nihil tempora possimus excepturi incidunt culpa?</p>
      </div>
    </div>
  );
};

export default Post;
