import user from '../data/profile.json';
import {FIND_USER_BY_ID} from "../actions/user-actions";

const UserReducer = (state = [], action) => {
    switch (action.type) {
        case FIND_USER_BY_ID:
            return action.userInfo
        default:
            return user
    }
}


export default UserReducer;
