import { Header, Sidebar } from '@components/organisms'
import { Outlet } from 'react-router-dom'

export const RootView: React.FC = () => {
    return (
        <div id="root-view" className="shown">
            <Header />
            <Sidebar />
            <div className="inner-view px-4 block pt-8">
                <Outlet />
            </div>
        </div>
    )
}
