import React from "react";
import { Link } from "react-router-dom";
import "./post.css";

const Post = ({post}) => {
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
            {post.title}
        </span>
        <hr />
        <span className="postDate">{new Date(post.createdAt).toDateString()}</span>
       <Link className="link" to={'/single/:asf'}>
       <p className="postDesc">{post.dese}</p></Link>
      </div>
    </div>
  );
};

export default Post;
