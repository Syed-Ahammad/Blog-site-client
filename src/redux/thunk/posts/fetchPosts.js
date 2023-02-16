import { loadPost } from "../../actions/postActions";

export const loadPostsData = ()=>{
    return async (dispatch, getState)=>{
        const res = await fetch("http://localhost:5000/post");
        const data = await res.json();
        console.log(data);
        if(data){
            dispatch(loadPost(data))
        }
    }
}