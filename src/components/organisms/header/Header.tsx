import { HeaderLeft } from '@components/molecules'
import React from 'react'

export const Header: React.FC = () => {
    return (
        <header className="header fixed flex right-0 left-20">
            <div className="inner container m-auto">
                <HeaderLeft />
            </div>
        </header>
    )
}
