import classNames from 'classnames'
import { NavLink } from 'react-router-dom'

export default function Header() {
  return (
    <header className='flex items-center justify-center gap-x-5 py-5 text-white'>
      <NavLink to='/' className={({ isActive }) => classNames({ 'text-primary': isActive })}>
        Home
      </NavLink>
      <NavLink to='/' className={({ isActive }) => classNames({ 'text-primary': isActive })}>
        Movies
      </NavLink>
    </header>
  )
}
