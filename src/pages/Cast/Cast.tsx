/* eslint-disable prettier/prettier */
import { useQuery } from '@tanstack/react-query'
import { useNavigate, useParams } from 'react-router-dom'
import { actorApi } from 'src/apis/actor.api'
import MovieCard from 'src/components/MovieCard'
import Pagination from 'src/components/Pagination/Pagination'
import { config } from 'src/constants/config'
import useQueryParams from 'src/hooks/useQueryParams'
import { generateNameId, getIdFromNameId, isoToCustomDateFormat } from 'src/utils/helpers'
import Birthday from './components/Birthday'
import Name from './components/Name'

const MOVIES_PER_PAGE = 20
export default function Cast() {
  const searchParams = useQueryParams()
  const page = searchParams.page || 1

  const params = useParams()
  const castId = getIdFromNameId(params.id ?? '')

  const navigate = useNavigate()

  const { data: castData } = useQuery({
    queryKey: ['cast', castId],
    queryFn: () => actorApi.getActorDetail({ actorId: castId })
  })

  const { data: moviesData } = useQuery({
    queryKey: ['moviesOfCast', castId],
    queryFn: () =>
      actorApi.getActorMovies({
        actorId: castId,
        params: { page: 1 }
      })
  })

  const cast = castData?.data
  const movies = moviesData?.data.cast
  const totalPages = Math.ceil(Number(movies?.length) / MOVIES_PER_PAGE) || 1

  const onMovieClicked = ({ id, name }: { id: string; name: string }) => {
    const nameId = generateNameId({ id, name })
    navigate(`/movie/${nameId}`)
  }

  console.log(movies)
  console.log('totalPages', totalPages)

  return (
    cast && (
      <div className='w-full mb-10 text-white'>
        {/* Banner */}
        <div className='relative mb-[250px]'>
          <div className='overlay bg-gradient-to-t from-black to-transparent w-full h-[600px] absolute inset-0 z-10' />
          <div className='w-full h-[600px]'>
            <img
              src={`${config.imageOriginalURL}${cast.profile_path}`}
              alt='movie_img'
              className='object-cover h-full w-full'
            />
          </div>
          <div className='w-[70%] h-[400px] lg:w-[60%] absolute z-20 bottom-0 translate-y-1/2 left-1/2 -translate-x-1/2'>
            <img
              src={`${config.imageOriginalURL}${cast.profile_path}`}
              alt='movie_img'
              className='object-cover rounded-lg h-full w-full'
            />
          </div>
        </div>

        {/* Description */}
        <div className='mt-10 page-container px-5'>
          <h1 className='text-3xl text-center'>{cast.name}</h1>
          <Name names={cast.also_known_as} />
          <div className='mt-10 text-gray-300'>
            <div className='flex items-center flex-wrap justify-end gap-x-8 gap-y-2 text-gray-300'>
              <div className='flex items-center gap-2'>
                <Birthday />
                <p>{isoToCustomDateFormat(cast.birthday || '')}</p>
              </div>
              <div>{cast.place_of_birth}</div>
            </div>
            <div className='mt-6 text-center'>{cast.biography}</div>
          </div>

          <div className='mt-10'>
            <h2 className='text-3xl text-center'>Movies</h2>
            <div className='mt-6 grid grid-cols-12 gap-4'>
              {movies &&
                movies.slice((Number(page) - 1) * MOVIES_PER_PAGE, Number(page) * MOVIES_PER_PAGE).map((movie) => (
                  <div key={movie.id} className='col-span-12 sm:col-span-6 lg:col-span-4 xl:col-span-3'>
                    <MovieCard movie={movie} onMovieClicked={onMovieClicked} />
                  </div>
                ))}
            </div>
          </div>

          <div className='mt-5'>
            <Pagination totalPages={totalPages} queryConfig={{ page: page }} path={`/cast/${castId}`} />
          </div>
        </div>
      </div>
    )
  )
}
