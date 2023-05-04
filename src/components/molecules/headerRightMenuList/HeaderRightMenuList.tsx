import { LangMenu, ProfileMenu } from '@components/organisms'
import React from 'react'

export const HeaderRightMenuList: React.FC = () => {
    return (
        <div className="flex items-center gap-6">
            <LangMenu />
            {/* <div className="cursor-pointer">
                <Icon className="text-gray-500" path={mdiBellOutline} size={'24px'} />
            </div> */}
            <ProfileMenu />
        </div>
    )
}
