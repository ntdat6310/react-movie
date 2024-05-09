import { MovieType } from '../types/movie.type'
import http from '../utils/http'

const URL = '/movie/'
const movieApi = {
  getMovies({ movie_type, params }: { movie_type: MovieType; params?: string }) {
    return http.get(`${URL}${movie_type}`, { params: params })
  }
}
export default movieApi
