import { DropdownMenuListing } from '@components/molecules'
import React from 'react'
import { Link } from 'react-router-dom'

export const ProfileMenuList: React.FC = () => {
    return (
        <div className="flex flex-col">
            <Link to="/">
                <DropdownMenuListing title="Profile" />
            </Link>
            <Link to="/">
                <DropdownMenuListing title="Settings" />
            </Link>
            <Link to="/" className="border-t">
                <DropdownMenuListing title="Sign Out" />
            </Link>
        </div>
    )
}
