import * as service from '../services/user-services';

export const FIND_USER_BY_ID = 'FIND_USER_BY_ID';

export const findUserByID = async (dispatch, userId) => {
    const userInfo = await service.findUserByID(userId);
    dispatch({
        type: FIND_USER_BY_ID,
        userInfo
    });
}


