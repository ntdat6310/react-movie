/* eslint-disable @typescript-eslint/no-unused-vars */
import { useQuery } from '@tanstack/react-query'
import BannerSlider from 'src/components/BannerSlider/BannerSlider'
import movieApi from '../../apis/movie.api'
import MovieList from '../../components/MovieList'
import { MovieType } from '../../constants/movieType'
import { useNavigate } from 'react-router-dom'
import { generateNameId } from 'src/utils/helpers'

export default function Home() {
  const navigate = useNavigate()

  const { data: upcommingMovies, isLoading: isLoadingUpcommingMovies } = useQuery({
    queryKey: ['movies', MovieType.upcoming],
    queryFn: () =>
      movieApi.getMovies({
        movie_type: MovieType.upcoming
      })
  })

  const { data: popularMovies, isLoading: isLoadingPopularMovies } = useQuery({
    queryKey: ['movies', MovieType.popular],
    queryFn: () =>
      movieApi.getMovies({
        movie_type: MovieType.popular
      })
  })

  const { data: nowPlayingMovies, isLoading: isLoadingNowPlayingMovies } = useQuery({
    queryKey: ['movies', MovieType.now_playing],
    queryFn: () =>
      movieApi.getMovies({
        movie_type: MovieType.now_playing
      })
  })

  const { data: topRatedMovies, isLoading: isLoadingTopRatedMovies } = useQuery({
    queryKey: ['movies', MovieType.top_rated],
    queryFn: () =>
      movieApi.getMovies({
        movie_type: MovieType.top_rated
      })
  })

  const onMovieClicked = ({ id, name }: { id: string; name: string }) => {
    const nameId = generateNameId({
      id,
      name
    })
    navigate(`/movie/${nameId}`)
  }

  return (
    <>
      <BannerSlider movies={nowPlayingMovies?.data.results} onMovieClicked={onMovieClicked} />

      <section className='page-container px-3 sm:px-5 mt-10'>
        <MovieList
          title='Now Playing'
          movies={nowPlayingMovies?.data.results}
          isLoading={isLoadingNowPlayingMovies}
          onMovieClicked={onMovieClicked}
        />
      </section>

      <section className='page-container px-3 sm:px-5 mt-10'>
        <MovieList
          title='Upcomming'
          movies={upcommingMovies?.data.results}
          isLoading={isLoadingUpcommingMovies}
          onMovieClicked={onMovieClicked}
        />
      </section>

      <section className='page-container px-3 sm:px-5 mt-10'>
        <MovieList
          title='Top Rated'
          movies={topRatedMovies?.data.results}
          isLoading={isLoadingTopRatedMovies}
          onMovieClicked={onMovieClicked}
        />
      </section>

      <section className='page-container px-3 sm:px-5 mt-10'>
        <MovieList
          title='Popular'
          movies={popularMovies?.data.results}
          isLoading={isLoadingPopularMovies}
          onMovieClicked={onMovieClicked}
        />
      </section>
    </>
  )
}
