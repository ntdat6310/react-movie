import classNames from 'classnames'
import { NavLink } from 'react-router-dom'
import Button from './components/Button'
import IconPlay from './components/IconPlay'
import IconStar from './components/IconStar'
import MovieList from './components/MovieList'
import { useQuery } from '@tanstack/react-query'
import movieApi from './apis/movie.api'

function App() {
  const { data } = useQuery({
    queryKey: ['movies', 1],
    queryFn: () =>
      movieApi.getMovies({
        movie_type: 'upcoming'
      })
  })
  console.log(data)
  return (
    <>
      <header className='flex items-center justify-center gap-x-5 py-5 text-white'>
        <NavLink to='/' className={({ isActive }) => classNames({ 'text-primary': isActive })}>
          Home
        </NavLink>
        <NavLink to='/' className={({ isActive }) => classNames({ 'text-primary': isActive })}>
          Movies
        </NavLink>
      </header>

      <section className='banner h-[400px] page-container px-3 sm:px-5'>
        <div className='w-full h-full rounded-lg relative'>
          <img
            src='https://sm.mashable.com/mashable_in/photo/default/avenegrs-cover_fkj9.jpg'
            alt='img_banner'
            className='w-full h-full object-cover rounded-lg'
          />
          <div className='absolute left-5 bottom-2 text-white z-10 flex flex-col gap-5'>
            <h2 className='text-xl sm:text-3xl font-bold'>Avenger: Endgame</h2>
            <div className='flex items-center gap-x-5 text-sm sm:text-base'>
              <span className='py-1 px-2 border-2 border-white rounded-lg'>2024</span>
              <div className='flex items-center gap-x-1 py-1 px-2 border-2 border-white rounded-lg'>
                <span>6.9</span>
                <IconStar />
              </div>
            </div>
            <Button
              title='Watch'
              titleClassName='text-sm sm:text-base'
              className='gap-x-1 py-2 px-6 sm:px-8 rounded-lg bg-primary self-start hover:cursor-pointer hover:bg-primary/80'
              icon={<IconPlay />}
            />
          </div>
          <div className='overlay rounded-lg absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.9)] to-[rgba(0,0,0,0.1)]'></div>
        </div>
      </section>

      <section className='movie page-container px-3 sm:px-5 mt-10'>
        <MovieList title='Now Playing' />
      </section>
    </>
  )
}

export default App
