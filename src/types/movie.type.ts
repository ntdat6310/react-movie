export type MovieType = 'now_playing' | 'popular' | 'top_rated' | 'upcoming'

export type Genre = {
  id: number
  name: string
}

export type Movie = {
  id: number
  adult: boolean
  backdrop_path: string
  poster_path: string
  original_title: string
  title: string
  overview: string
  release_date: string
  video: boolean
  vote_average: number
  vote_count: number
}

export type MovieDetail = {
  id: number
  adult: boolean
  backdrop_path: string
  genres: Genre[]
  original_title: string
  title: string
  overview: string
  popularity: number
  poster_path: string
  release_date: string
  revenue: number
  status: string
  video: boolean
  vote_average: number
  vote_count: number
}
