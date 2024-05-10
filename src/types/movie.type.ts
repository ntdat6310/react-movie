export type MovieType = 'now_playing' | 'popular' | 'top_rated' | 'upcoming'

export type Genre = {
  id: number
  name: string
}

export type Movie = {
  id: number
  adult: boolean
  backdrop_path?: string
  poster_path?: string
  original_title: string
  title: string
  overview: string
  release_date: string
  video: boolean
  vote_average: number
  vote_count: number
}

export type MovieDetail = Movie & {
  genres: Genre[]
  popularity: number
  revenue: number
  status: string
}

// type CastsOfMovie = {}
const castsOfMovie = {
  adult: false,
  gender: 2,
  id: 287,
  known_for_department: 'Acting',
  name: 'Brad Pitt',
  original_name: 'Brad Pitt',
  popularity: 45.202,
  profile_path: '/huV2cdcolEUwJy37QvH914vup7d.jpg',
  cast_id: 5,
  character: 'Tyler Durden',
  credit_id: '52fe4250c3a36847f80149f7',
  order: 1
}
