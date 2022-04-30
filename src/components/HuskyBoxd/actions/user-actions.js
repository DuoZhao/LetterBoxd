import * as service from '../services/user-services';

export const FIND_USER_BY_ID = 'FIND_USER_BY_ID';
export const UPDATE_USER_FAVORITE_MOVIE = 'UPDATE_USER_FAVORITE_MOVIE';
export const UPDATE_USER_HISTORY_MOVIE = 'UPDATE_USER_HISTORY_MOVIE';
export const UPDATE_USER = 'UPDATE_USER';

export const findUserByID = async (dispatch, userId) => {
    const userInfo = await service.findUserByID(userId);
    dispatch({
        type: FIND_USER_BY_ID,
        userInfo
    });
}



//My movie
export const updateFavoriteMovie = async (dispatch, userId, movieId) => {
    const userInfo = await service.updateFavoriteMovie(userId, movieId);
    console.log(userInfo);
    dispatch(
        {
            type: UPDATE_USER_FAVORITE_MOVIE,
            userInfo
        }
    )
}

export const updateHistoryMovie = async (dispatch, userId, movieId) => {
    const userInfo = await service.updateFavoriteMovie(userId, movieId);
    dispatch(
        {
            type: UPDATE_USER_HISTORY_MOVIE,
            userInfo
        }
    )
}






export const updateUser = async (dispatch, userId, username, email) => {
    const status = await service.updateUser(userId, username, email);
    dispatch({
        type: UPDATE_USER,
        userId
    });
}


