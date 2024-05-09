import { Movie, MovieDetail, MovieType } from '../types/movie.type'
import { Reviews } from '../types/review.type'
import http from '../utils/http'

const URL = '/movie'
const movieApi = {
  getMovies({ movie_type, params }: { movie_type: MovieType; params?: string }) {
    return http.get<Movie[]>(`${URL}/${movie_type}`, { params: params })
  },

  getMovieDetail(movieId: string | number) {
    return http.get<MovieDetail>(`${URL}/${movieId}`)
  },

  getSimilarMovies(movieId: string | number) {
    return http.get<Movie[]>(`${URL}/${movieId}/similar`)
  },

  getMovieReviews(movieId: string | number) {
    return http.get<Reviews>(`${URL}/${movieId}/similar`)
  }
}
export default movieApi
