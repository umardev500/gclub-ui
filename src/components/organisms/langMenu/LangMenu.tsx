import { Popover, Transition } from '@headlessui/react'
import React, { Fragment } from 'react'
import { LangMenuList } from '..'

export const LangMenu: React.FC = () => {
    return (
        <Popover className="relative">
            <Popover.Button className="flex relative outline-none">
                <img className="w-5 h-5 rounded-full" src="assets/icons/usa.png" alt="language" />
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
                <Popover.Panel className="absolute w-36 z-10 bg-white shadow-md shadow-gray-200 overflow-clip rounded-md right-0 mt-2">
                    <LangMenuList />
                </Popover.Panel>
            </Transition>
        </Popover>
    )
}
