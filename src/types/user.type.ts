import { Movie } from './movie.type'

export type Reviewer = {
  name: string
  username: string
  avatar_path: string | null
  rating: number | null
}

export type Actor = {
  id: number
  biography: string
  birthday: string
  gender: 1 | 2 | 3 // 1. Female; 2. Male; 3. Non-binary
  name: string
  place_of_birth: string
  profile_path: string
}

export type MoviesOfActor = {
  cast: Movie[]
  id: number
}
