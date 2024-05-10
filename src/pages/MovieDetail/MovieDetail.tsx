import { useQuery } from '@tanstack/react-query'
import { useNavigate, useParams } from 'react-router-dom'
import movieApi from 'src/apis/movie.api'
import IconStar from 'src/components/IconStar'
import MovieList from 'src/components/MovieList'
import Pagination from 'src/components/Pagination/Pagination'
import { config } from 'src/constants/config'
import useQueryParams from 'src/hooks/useQueryParams'
import { QueryConfig } from 'src/types/query.type'
import { generateNameId, getIdFromNameId } from 'src/utils/helpers'
import CastList from './components/CastList'
import Genre from './components/Genre/Genre'
import Review from './components/Review/Review'

export default function MovieDetail() {
  const searchParams = useQueryParams()
  const page = searchParams.page || 1

  const params = useParams()
  const movieId = getIdFromNameId(params.id ?? '')

  const navigate = useNavigate()

  const { data: movieData } = useQuery({
    queryKey: ['movie', movieId],
    queryFn: () => movieApi.getMovieDetail(movieId)
  })
  const { data: castsData } = useQuery({
    queryKey: ['cast', movieId],
    queryFn: () => movieApi.getCastsOfMovie(movieId)
  })
  const { data: similarMovieData } = useQuery({
    queryKey: ['movies', movieId],
    queryFn: () => movieApi.getSimilarMovies(movieId)
  })
  const { data: movieReviewsData } = useQuery({
    queryKey: ['reviews', movieId, page],
    queryFn: () => movieApi.getMovieReviews(movieId, { page })
  })

  const onMovieClicked = ({ id, name }: { id: string; name: string }) => {
    const nameId = generateNameId({
      id,
      name
    })
    navigate(`/movie/${nameId}`)
  }

  const movie = movieData?.data
  const casts = castsData?.data.cast
  const similarMovies = similarMovieData?.data.results
  const reviews = movieReviewsData?.data
  return (
    <div className='w-full mt-5 mb-10 text-white'>
      <div className='relative mb-[250px]'>
        <div className='overlay bg-gradient-to-t from-black to-transparent w-full h-[600px] absolute inset-0 z-10' />
        <div className='w-full h-[600px]'>
          <img
            src={`${config.imageOriginalURL}${movie?.backdrop_path}`}
            alt='movie_img'
            className='object-cover h-full w-full'
          />
        </div>
        <div className='w-[70%] h-[400px] lg:w-[60%] absolute z-20 bottom-0 translate-y-1/2 left-1/2 -translate-x-1/2'>
          <img
            src={`${config.imageOriginalURL}${movie?.poster_path}`}
            alt='movie_img'
            className='object-cover rounded-lg h-full w-full'
          />
        </div>
      </div>

      <div className='mt-10'>
        <h1 className='text-3xl text-center'>{movie?.title}</h1>
        <Genre genres={movie?.genres} />
        <div className='mt-10 text-gray-300 w-[70%] lg:w-[60%] m-auto '>
          <div className='my-2 flex items-center flex-wrap justify-end gap-x-8 gap-y-2 text-gray-300'>
            <p>Release: {movie?.release_date}</p>
            <div className='flex items-center gap-1'>
              {movie?.vote_count}
              <IconStar />
            </div>
          </div>
          <div className='text-center'>{movie?.overview}</div>
        </div>
      </div>
      <div className='page-container'>
        <div className='mt-10 px-5'>
          <CastList casts={casts} title='Casts' titleClassName='text-3xl text-center' />
        </div>
        <div className='mt-10 px-5'>
          <MovieList
            title='Similars'
            titleClassName='text-3xl text-center'
            movies={similarMovies}
            onMovieClicked={onMovieClicked}
          />
        </div>

        {reviews && reviews.results.length > 0 && (
          <div className='mt-10 px-5'>
            <h2 className='text-3xl text-center'>Reviews</h2>
            {reviews.results.map((review) => (
              <Review key={review.id} review={review} />
            ))}
            <Pagination path='/movie' totalPages={reviews.total_pages} queryConfig={page as QueryConfig} />
          </div>
        )}
      </div>
    </div>
  )
}
