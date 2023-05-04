import { Footer, Header, Sidebar } from '@components/organisms'
import { Outlet } from 'react-router-dom'

export const RootView: React.FC = () => {
    return (
        <div id="root-view" className="">
            <Header />
            <Sidebar />
            <div className="inner-view px-4 flex flex-col justify-between min-h-screen">
                <Outlet />
                <Footer />
            </div>
        </div>
    )
}
