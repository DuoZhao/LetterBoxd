import * as service from '../services/detail-services';
import * as mService from '../services/movie-services';

import {createMovieToMongo, findMovieByIDFromMongo} from "../services/detail-services";

export const FIND_MOVIE_BY_ID = 'FIND_MOVIE_BY_ID';
export const FIND_MOVIE_IMG_BY_ID = 'FIND_MOVIE_IMG_BY_ID';

export const findMovieByID = async (dispatch, movieId, needImage) => {
    // console.log("movieId");
    console.log(movieId);
    let movieInfo = await mService.findMovieByimdbID(movieId);
    console.log(movieInfo);
    if (!movieInfo) {
        movieInfo = await service.findMovieByID(movieId);
        await mService.createMovie(movieInfo);

    }
    console.log(movieInfo);
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
