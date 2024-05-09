/* eslint-disable import/no-unresolved */
// import Swiper core and required modules
import 'swiper/css'
import 'swiper/css/navigation'
import { Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import MovieCard from './components/MovieCard'
import { Movie } from '../../types/movie.type'
import MovieSkeleton from './components/MovieSkeleton'
interface Props {
  title?: string
  movies?: Movie[]
  isLoading?: boolean
}
export default function MovieList({ title, movies, isLoading }: Props) {
  return (
    <div className='relative movies-list'>
      {title && <h2 className='text-2xl text-white font-bold mt-5'>{title}</h2>}
      {movies && movies.length > 0 && (
        <Swiper
          modules={[Navigation]}
          navigation
          className='mt-6'
          slidesPerView={1}
          spaceBetween={20}
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 20
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 20
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 20
            },
            1280: {
              slidesPerView: 4,
              spaceBetween: 20
            }
          }}
        >
          {isLoading &&
            Array(4)
              .fill(0)
              .map((_, index) => (
                <SwiperSlide key={index}>
                  <MovieSkeleton />
                </SwiperSlide>
              ))}
          {!isLoading &&
            movies.map((movie) => {
              return (
                <SwiperSlide key={movie.id}>
                  <MovieCard movie={movie} />
                </SwiperSlide>
              )
            })}
        </Swiper>
      )}
    </div>
  )
}
