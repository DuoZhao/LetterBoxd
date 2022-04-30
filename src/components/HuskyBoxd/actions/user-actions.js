import * as service from '../services/user-services';

export const FIND_USER_BY_ID = 'FIND_USER_BY_ID';
export const UPDATE_USER = 'UPDATE_USER';

export const findUserByID = async (dispatch, userId) => {
    const userInfo = await service.findUserByID(userId);
    dispatch({
        type: FIND_USER_BY_ID,
        userInfo
    });
}



export const updateUser = async (dispatch, userId, username, email) => {
    const status = await service.updateUser(userId, username, email);
    dispatch({
        type: UPDATE_USER,
        userId
    });
}


