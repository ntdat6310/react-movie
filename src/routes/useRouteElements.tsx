import { useRoutes } from 'react-router-dom'
import Home from '../pages/Home'

export default function useRouteElements() {
  const elements = useRoutes([
    {
      path: '/',
      element: <Home />
    }
  ])
  return elements
}
