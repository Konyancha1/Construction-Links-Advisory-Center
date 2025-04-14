import { createRouter } from '@tanstack/react-router'
import { RootRoute } from './routes/_root'
import { AboutRoute } from './routes/about'
import { HomeRoute } from './routes/home'
import { ServicesRoute } from './routes/services'
import { ContactRoute } from './routes/contact'

const routeTree = RootRoute.addChildren([
  HomeRoute,
  AboutRoute,
  ServicesRoute,
  ContactRoute
])

export const router = createRouter({ routeTree })
