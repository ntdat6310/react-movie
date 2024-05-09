import { Actor, ActorMovies } from '../types/user.type'
import http from '../utils/http'

const URL = '/person'
export const actorApi = {
  getActorDetail({ actorId, params }: { actorId: string; params: object }) {
    return http.get<Actor>(`${URL}/${actorId}`, { params })
  },
  getActorMovies({ actorId, params }: { actorId: string; params: object }) {
    return http.get<ActorMovies>(`${URL}/${actorId}/movie_credits`, { params })
  }
}
