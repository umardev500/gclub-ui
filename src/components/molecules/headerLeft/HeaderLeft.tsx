import { SidebarTrigger } from '@components/atoms'
import React from 'react'

export const HeaderLeft: React.FC = () => {
    return (
        <div className="flex items-center gap-4">
            <SidebarTrigger />
            <h3 className="text-lg font-medium text-gray-600">Home</h3>
        </div>
    )
}
