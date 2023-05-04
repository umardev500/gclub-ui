import React, { useRef } from 'react'
import { SidebarMenuList } from '..'
import { useBackdrop } from '@hooks/useBackdrop'

export const Sidebar: React.FC = () => {
    const backdropRef = useRef<HTMLDivElement>(null)
    useBackdrop(backdropRef)

    return (
        <>
            <aside className="sidebar flex items-start justify-center bg-white fixed top-0 bottom-0 w-20">
                <div className="inner flex flex-col items-center py-2">
                    <div className="flex mb-4 px-4 py-2 items-center m-auto cursor-pointer">
                        <img className="w-8" src="assets/logos/logo.svg" alt="" />
                    </div>

                    <SidebarMenuList />
                </div>
            </aside>
            <div ref={backdropRef} className="sidebar-backdrop pointer-events-none"></div>
        </>
    )
}
