/* eslint-disable import/no-unresolved */
import { Movie } from 'src/types/movie.type'
import 'swiper/css'
import 'swiper/css/navigation'
import { Autoplay, Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import Banner from './components/Banner'

interface Props {
  movies?: Movie[]
}
export default function BannerSlider({ movies }: Props) {
  return (
    <section className='banner h-[400px] page-container px-3 sm:px-5'>
      {movies && (
        <Swiper
          modules={[Navigation, Autoplay]}
          navigation
          className='mt-6'
          slidesPerView={1}
          spaceBetween={20}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false
          }}
        >
          {movies.map((movie) => {
            return (
              <SwiperSlide key={movie.id}>
                <Banner movie={movie} />
              </SwiperSlide>
            )
          })}
        </Swiper>
      )}
    </section>
  )
}
