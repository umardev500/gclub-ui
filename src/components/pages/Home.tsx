import React from 'react'
import { Header, Sidebar } from '..'

export const Home: React.FC = () => {
    return (
        <div id="root-view" className="shown">
            <Header />
            <Sidebar />
        </div>
    )
}
