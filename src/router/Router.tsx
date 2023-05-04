import { createBrowserRouter } from 'react-router-dom'
import { RootView } from './RootView'
import { Home, User } from '@components/pages'

export const router = createBrowserRouter([
    {
        path: '/',
        element: <RootView />,
        children: [
            {
                path: '/',
                element: <Home />,
            },
            {
                path: '/user',
                element: <User />,
            },
        ],
    },
])
