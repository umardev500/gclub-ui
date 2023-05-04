import { DropdownMenuListing } from '@components/molecules'
import React from 'react'
import { Link } from 'react-router-dom'

export const LangMenuList: React.FC = () => {
    return (
        <div className="flex flex-col">
            <Link to="/">
                <DropdownMenuListing title="English" />
            </Link>
            <Link to="/">
                <DropdownMenuListing title="Indonesia" />
            </Link>
        </div>
    )
}
