import user from '../data/profile.json';
import {
    FIND_USER_BY_ID,
    UPDATE_USER,
    UPDATE_USER_REAL,
    UPDATE_USER_FAVORITE_MOVIE,
    UPDATE_USER_HISTORY_MOVIE
} from "../actions/user-actions";

const UserReducer = (state = [], action) => {
    switch (action.type) {
        case FIND_USER_BY_ID:
            return action.userInfo
        case UPDATE_USER_FAVORITE_MOVIE:
            return state.map(user => user._id === action.user._id ? action.user : user);
        case UPDATE_USER_HISTORY_MOVIE:
            return state.map(user => user._id === action.user._id ? action.user : user);
        default:
            return state;
    }
}


export default UserReducer;
