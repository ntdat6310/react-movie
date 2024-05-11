/* eslint-disable import/no-unresolved */
import { Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import { Movie } from 'src/types/movie.type'
import MovieSkeleton from 'src/components/MovieSkeleton'
import MovieCard from 'src/components/MovieCard'

interface Props {
  title?: string
  titleClassName?: string
  movies?: Movie[]
  isLoading?: boolean
  onMovieClicked?: ({ id, name }: { id: string; name: string }) => void
}
export default function MovieList({
  title,
  movies,
  isLoading,
  onMovieClicked,
  titleClassName = 'text-2xl text-white font-bold mt-5'
}: Props) {
  return (
    <div className='relative movies-list'>
      {movies && movies.length > 0 && title && <h2 className={titleClassName}>{title}</h2>}
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
                  <MovieCard movie={movie} onMovieClicked={onMovieClicked} />
                </SwiperSlide>
              )
            })}
        </Swiper>
      )}
    </div>
  )
}
