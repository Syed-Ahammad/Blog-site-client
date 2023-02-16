import { LOAD_POST } from "../actionsTypes/actionType";

const initialState = {
  posts: [],
};

const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_POST:
      return {
        ...state,
        posts: action.payload,
      };

    default:
      return state;
  }
};

export default postReducer;