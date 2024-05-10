import { useRoutes } from 'react-router-dom'
import Home from '../pages/Home'
import MainLayout from '../layouts/MainLayout/MainLayout'
import MovieDetail from 'src/pages/MovieDetail'
import Cast from 'src/pages/Cast'
import Search from 'src/pages/Search'

export default function useRouteElements() {
  const elements = useRoutes([
    {
      path: '/',
      index: true,
      element: (
        <MainLayout>
          <Home />
        </MainLayout>
      )
    },
    {
      path: '/movie/:id',
      element: (
        <MainLayout>
          <MovieDetail />
        </MainLayout>
      )
    },
    {
      path: '/cast/:id',
      element: (
        <MainLayout>
          <Cast />
        </MainLayout>
      )
    },
    {
      path: '/search',
      element: (
        <MainLayout>
          <Search />
        </MainLayout>
      )
    }
  ])
  return elements
}
