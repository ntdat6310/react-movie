/* eslint-disable import/no-unresolved */
import { Video as VideoType } from 'src/types/movie.type'
import { Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

interface Props {
  videos?: VideoType[]
}

export default function Video({ videos }: Props) {
  return (
    videos && (
      <Swiper modules={[Navigation]} spaceBetween={20} slidesPerView={1} navigation={true}>
        {videos.slice(0, 3).map((trailer) => {
          return (
            <SwiperSlide key={trailer.key}>
              <iframe
                src={`https://www.youtube.com/embed/${trailer.key}`}
                title={`${trailer.name}`}
                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                allowFullScreen
              ></iframe>
            </SwiperSlide>
          )
        })}
      </Swiper>
    )
  )
}
