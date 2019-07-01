import { CREATE_POST, DELETE_POST, FETCH_POSTS, GET_POST, UPDATE_POST, } from './../actions/types'
import initialState from './../store/initialState';


const postReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_POSTS:
            return {
                ...state,
                items: action.payload
            };
        default:
            return state
    }
};

export default postReducer;
