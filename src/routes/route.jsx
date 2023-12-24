import { useRoutes } from 'react-router-dom'
import Home from '../components/Home'
import Layout from '../layout/layout'
import PrivateLayout from '../layout/privateLayout'

const Route = () => {
    const routes = useRoutes([
        {
            path: '/',
            element: <Layout />,
            children: [
                {
                    element: <PrivateLayout />,
                    children: [
                        {
                            index: true,
                            element: <Home />
                        }
                    ]
                }
            ]
        }
    ])
    return routes
}

export default Route