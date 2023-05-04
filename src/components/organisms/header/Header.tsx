import { HeaderLeft, HeaderRight } from '@components/molecules'
import React from 'react'

export const Header: React.FC = () => {
    return (
        <header className="header px-4 fixed flex right-0 top-0 left-0">
            <div className="inner flex justify-between items-center container m-auto">
                <HeaderLeft />
                <HeaderRight />
            </div>
        </header>
    )
}
