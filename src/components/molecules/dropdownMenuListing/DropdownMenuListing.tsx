import React from 'react'

interface Props {
    title?: string
}

export const DropdownMenuListing: React.FC<Props> = ({ title }) => {
    return <div className="cursor-pointer text-gray-600 hover:bg-gray-50 text-sm px-4 whitespace-nowrap py-2">{title}</div>
}
