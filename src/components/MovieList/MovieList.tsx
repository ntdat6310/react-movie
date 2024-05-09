/* eslint-disable import/no-unresolved */
// import Swiper core and required modules
import 'swiper/css'
import 'swiper/css/navigation'
import { Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import MovieCard from './components/MovieCard'
import { Movie } from '../../types/movie.type'
interface Props {
  title?: string
  movies?: Movie[]
}
export default function MovieList({ title, movies }: Props) {
  return (
    <div className='relative movies-list'>
      {title && <h2 className='text-2xl text-white font-bold mt-5'>{title}</h2>}
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
        <SwiperSlide>
          <MovieCard />
        </SwiperSlide>
        <SwiperSlide>
          <MovieCard />
        </SwiperSlide>
        <SwiperSlide>
          <MovieCard />
        </SwiperSlide>
        <SwiperSlide>
          <MovieCard />
        </SwiperSlide>
        <SwiperSlide>
          <MovieCard />
        </SwiperSlide>
        <SwiperSlide>
          <MovieCard />
        </SwiperSlide>
      </Swiper>
    </div>
  )
}
