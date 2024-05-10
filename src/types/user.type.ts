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
  adult: boolean
  also_known_as: string[]
  deathday: null
  homepage: null
  known_for_department: string
  popularity: number
}

export type MoviesOfActor = {
  cast: Movie[]
  id: number
}

const a = {
  adult: false,
  also_known_as: [
    'קיאנו ריבס',
    'キアヌ・チャールズ・リーブス',
    'キアヌ・リーブス',
    '基努·里维斯',
    'Кіану Рівз',
    'Keanu Charles Reeves',
    'Dogstar',
    '키아누 리브스',
    '基努·李維'
  ],
  biography:
    "Keanu Charles Reeves is a Canadian actor. Reeves is known for his roles in Bill & Ted's Excellent Adventure, Speed, Point Break, and The Matrix franchise as Neo.\n\nHe has collaborated with major directors such as Stephen Frears (in the 1988 period drama Dangerous Liaisons); Gus Van Sant (in the 1991 independent film My Own Private Idaho); and Bernardo Bertolucci (in the 1993 film Little Buddha). Referring to his 1991 film releases, The New York Times' critic, Janet Maslin, praised Reeves' versatility, saying that he \"displays considerable discipline and range. He moves easily between the buttoned-down demeanor that suits a police procedural story and the loose-jointed manner of his comic roles.\" A repeated theme in roles he has portrayed is that of saving the world, including the characters of Ted Logan, Buddha, Neo, Johnny Mnemonic, John Constantine and Klaatu.",
  birthday: '1964-09-02',
  deathday: null,
  gender: 2,
  homepage: null,
  id: 6384,
  imdb_id: 'nm0000206',
  known_for_department: 'Acting',
  name: 'Keanu Reeves',
  place_of_birth: 'Beirut, Lebanon',
  popularity: 96.269,
  profile_path: '/4D0PpNI0kmP58hgrwGC3wCjxhnm.jpg'
}
