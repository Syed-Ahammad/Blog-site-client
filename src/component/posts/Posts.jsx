import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadPostsData } from '../../redux/thunk/posts/fetchPosts';
import Post from '../post/Post';
import './posts.css';

const Posts = () => {
  const posts = useSelector((state)=> state.posts);
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(loadPostsData())
  },[dispatch])
  console.log(posts);
    return (
        <div className='posts'>
          {posts.map(post => <Post key={post._id} post={post}></Post>)}
        </div>
    );
};

export default Posts;