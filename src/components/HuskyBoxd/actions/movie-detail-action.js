import * as service from '../services/detail-services';
import * as mService from '../services/movie-services';

export const FIND_MOVIE_BY_ID = 'FIND_MOVIE_BY_ID';
export const FIND_MOVIE_IMG_BY_ID = 'FIND_MOVIE_IMG_BY_ID';

export const findMovieByID = async (dispatch, movieId, needImage) => {
    let movieInfo = await mService.findMovieByimdbID(movieId);
    if (!movieInfo) {
        movieInfo = await service.findMovieByID(movieId);
        await mService.createMovie(movieInfo);
    }
    if (needImage) {
        const movieImg = await service.findMovieImgByID(movieId);
        const imgListObject = JSON.parse(JSON.stringify(movieImg.items));
        if (imgListObject && imgListObject[0] && imgListObject[0].image) {
            movieInfo["image"] = imgListObject[0].image;
        }
    }

    dispatch({
        type: FIND_MOVIE_BY_ID,
        movieInfo
    });

    return movieInfo;
}
