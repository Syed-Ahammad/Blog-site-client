import { LOAD_POST } from "../actionsTypes/actionType"

export const loadPost = (data) =>{
    return {
        type: LOAD_POST,
        payload: data
    }
};