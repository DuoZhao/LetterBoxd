import user from '../data/profile.json';
import {FIND_USER_BY_ID, UPDATE_USER} from "../actions/user-actions";

const UserReducer = (state = [], action) => {
    switch (action.type) {
        case FIND_USER_BY_ID:
            return action.userInfo
        case UPDATE_USER:
            return state.map(
                user => user._id === action.user._id ?
                    action.user : user);
        default:
            return user
    }
}


export default UserReducer;
