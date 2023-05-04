import { mdiBellOutline } from '@mdi/js'
import Icon from '@mdi/react'
import React from 'react'

export const HeaderRightMenuList: React.FC = () => {
    return (
        <div className="flex items-center gap-6">
            <div className="cursor-pointer">
                <img className="w-5 h-5 rounded-full" src="assets/icons/usa.png" alt="language" />
            </div>
            <div className="cursor-pointer">
                <Icon className="text-gray-500" path={mdiBellOutline} size={'24px'} />
            </div>
            <div className="cursor-pointer relative avatar-container">
                <img className="w-10 h-10 rounded-full" src="assets/avatars/avatar-2.png" alt="avatar" />
                <div id="online-dot" className="bg-teal-400 ring ring-white rounded-full absolute bottom-0 right-0"></div>
            </div>
        </div>
    )
}
