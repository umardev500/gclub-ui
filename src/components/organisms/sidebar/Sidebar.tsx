import React from 'react'
import { SidebarMenuList } from '..'

export const Sidebar: React.FC = () => {
    return (
        <>
            <aside className="sidebar flex items-start justify-center bg-white fixed top-0 left-0 bottom-0 w-20">
                <div className="inner flex flex-col items-center py-2">
                    <div className="flex mb-4 px-4 py-2 items-center m-auto cursor-pointer">
                        <img className="w-8" src="assets/logos/logo.svg" alt="" />
                    </div>

                    <SidebarMenuList />
                </div>
            </aside>
            <div className="sidebar-backdrop"></div>
        </>
    )
}
