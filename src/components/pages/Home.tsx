import React from 'react'
import { Header, ProfileMenu, Sidebar } from '..'

export const Home: React.FC = () => {
    return (
        <div id="root-view" className="shown">
            <Header />
            <Sidebar />
            {/* <ProfileMenu /> */}
        </div>
    )
}
