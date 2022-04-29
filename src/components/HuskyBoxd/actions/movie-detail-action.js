import * as service from '../services/detail-services';

export const FIND_MOVIE_BY_ID = 'FIND_MOVIE_BY_ID';
export const FIND_MOVIE_IMG_BY_ID = 'FIND_MOVIE_IMG_BY_ID';

export const findMovieByID = async (dispatch, movieId, needImage) => {
    const movieInfo = await service.findMovieByID(movieId);
    if (needImage) {
        const movieImg = await service.findMovieImgByID(movieId);
        const imgListObject = JSON.parse(JSON.stringify(movieImg.items));
        movieInfo["image"] = imgListObject[0].image;
    }
    dispatch({
        type: FIND_MOVIE_BY_ID,
        movieInfo
    });
    return movieInfo;
}
