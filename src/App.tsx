import classNames from 'classnames'
import { NavLink } from 'react-router-dom'

function App() {
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

      <section className='h-[400px] page-container px-3 sm:px-5'>
        <div className='w-full h-full rounded-lg relative'>
          <img
            src='https://sm.mashable.com/mashable_in/photo/default/avenegrs-cover_fkj9.jpg'
            alt='img_banner'
            className='w-full h-full object-cover rounded-lg'
          />
          <div className='absolute left-5 bottom-2 text-white z-10 flex flex-col gap-5'>
            <h2 className='text-xl sm:text-2xl font-bold'>Avenger: Endgame</h2>
            <div className='flex items-center gap-x-5 text-sm sm:text-base'>
              <span className='py-1 px-2 border-2 border-white rounded-lg'>2024</span>
              <div className='flex items-center gap-x-1 py-1 px-2 border-2 border-white rounded-lg'>
                <span>6.9</span>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 24 24'
                  fill='rgb(250 204 21/ 1)'
                  className='w-5 h-5'
                >
                  <path
                    fillRule='evenodd'
                    d='M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z'
                    clipRule='evenodd'
                  />
                </svg>
              </div>
            </div>
            <div className='flex items-center gap-x-1 py-2 px-6 sm:px-8 rounded-lg bg-primary self-start'>
              <button className='text-sm sm:text-base'>Watch</button>
              <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor' className='w-5 h-5'>
                <path
                  fillRule='evenodd'
                  d='M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm14.024-.983a1.125 1.125 0 0 1 0 1.966l-5.603 3.113A1.125 1.125 0 0 1 9 15.113V8.887c0-.857.921-1.4 1.671-.983l5.603 3.113Z'
                  clipRule='evenodd'
                />
              </svg>
            </div>
          </div>
          <div className='overlay rounded-lg absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.9)] to-[rgba(0,0,0,0.1)]'></div>
        </div>
      </section>
    </>
  )
}

export default App
