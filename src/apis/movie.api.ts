import { Actor } from 'src/types/user.type'
import { Movie, MovieDetail, MovieType, Video } from '../types/movie.type'
import http from '../utils/http'
import { SuccessResponse } from 'src/types/response.type'
import { Review } from 'src/types/review.type'

const URL = '/movie'
const movieApi = {
  getMovies({ movie_type, params }: { movie_type: MovieType; params?: string }) {
    return http.get<{ results: Movie[] }>(`${URL}/${movie_type}`, { params: params })
  },

  getMovieDetail(movieId: string | number) {
    return http.get<MovieDetail>(`${URL}/${movieId}`)
  },

  getSimilarMovies(movieId: string | number) {
    return http.get<SuccessResponse<Movie[]>>(`${URL}/${movieId}/similar`)
  },

  getMovieReviews(movieId: string | number, params?: object) {
    console.log('params', params)
    return http.get<SuccessResponse<Review[]>>(`${URL}/${movieId}/reviews`, {
      params
    })
  },

  getCastsOfMovie(movieId: string | number) {
    return http.get<{ cast: Actor[] }>(`${URL}/${movieId}/credits`)
  },

  getMovieVideos(movieId: string | number) {
    return http.get<{ results: Video[] }>(`${URL}/${movieId}/videos`)
  }
}
export default movieApi
