import * as service from '../services/user-services';

export const FIND_USER_BY_ID = 'FIND_USER_BY_ID';
export const UPDATE_USER_FAVORITE_MOVIE = 'UPDATE_USER_FAVORITE_MOVIE';
export const UPDATE_USER_HISTORY_MOVIE = 'UPDATE_USER_HISTORY_MOVIE';
export const UPDATE_USER = 'UPDATE_USER';
export const UPDATE_USER_REAL = 'UPDATE_USER_REAL';

export const findUserByID = async (dispatch, userId) => {
    const userInfo =  await service.findUserByID(userId);
    return userInfo;
}

export const updateFavoriteMovie = async (dispatch, userId, movieId) => {
    const userInfo = await service.updateFavoriteMovie(userId, movieId);
}

export const updateHistoryMovie = async (dispatch, userId, movieId) => {
    const userInfo = await service.updateHistoryMovie(userId, movieId);
}

export const updateUser = async (dispatch, userId, username, email, realID) => {
    const status = await service.updateUser(userId, username, email, realID);
    dispatch({
        type: UPDATE_USER,
        userId
    });
}

export const updateUserReal = async (dispatch, userId,realUser) => {
    const status = await service.updateUserReal(userId,realUser);
    dispatch({
        type: UPDATE_USER_REAL,
        userId
    });
}


