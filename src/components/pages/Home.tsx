import React from 'react'
import { Header, Sidebar } from '..'

export const Home: React.FC = () => {
    return (
        <div className="shown">
            <Sidebar />
            <Header />
        </div>
    )
}
