import http from '../utils/http'
import { Movie } from '../types/movie.type'
import { Keyword } from '../types/keyword.type'

const URL = '/search'
export const searchApi = {
  searchKeywordToSuggest({ keyword, params }: { keyword: string; params: object }) {
    return http.get<Keyword>(`${URL}/keyword`, {
      params: {
        ...params,
        query: keyword
      }
    })
  },
  searchMovies({ keyword, params }: { keyword: string; params: object }) {
    return http.get<Movie[]>(`${URL}/movie`, {
      params: {
        ...params,
        query: keyword
      }
    })
  },
  searchActors({ keyword, params }: { keyword: string; params: object }) {
    return http.get<Movie[]>(`${URL}/person`, {
      params: {
        ...params,
        query: keyword
      }
    })
  }
}
