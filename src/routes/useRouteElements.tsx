import { useRoutes } from 'react-router-dom'
import Home from '../pages/Home'
import MainLayout from '../layouts/MainLayout/MainLayout'

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
    }
  ])
  return elements
}
