import { Popover, Transition } from '@headlessui/react'
import React, { Fragment } from 'react'
import { ProfileMenuList } from '..'

export const ProfileMenu: React.FC = () => {
    return (
        <Popover className="relative">
            <Popover.Button className="flex relative outline-none avatar-container">
                <img className="w-10 h-10 rounded-full" src="assets/avatars/avatar-2.png" alt="avatar" />
                <div id="online-dot" className="bg-teal-400 ring ring-white rounded-full absolute bottom-0 right-0"></div>
            </Popover.Button>

            <Transition
                as={Fragment}
                enter="transition ease-out duration-200"
                enterFrom="opacity-0 translate-y-1"
                enterTo="opacity-100 translate-y-0"
                leave="transition ease-in duration-150"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 translate-y-1"
            >
                <Popover.Panel className="absolute mt-1.5 bg-white shadow-md border shadow-gray-200 rounded-md overflow-clip z-10 right-0" style={{ minWidth: 150 }}>
                    <ProfileMenuList />
                </Popover.Panel>
            </Transition>
        </Popover>
    )
}
