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
                <Popover.Panel className="absolute z-10 bg-white shadow-md shadow-gray-200 overflow-clip rounded-md right-0 mt-2">
                    <div className="flex px-4 py-2 items-center gap-3 border-b">
                        <div className="bg-green-400 w-10 h-10 rounded-full overflow-clip">
                            <img className="w-full h-full" src="assets/avatars/avatar-2.png" alt="avatar" />
                        </div>
                        <div className="pr-4">
                            <div className="whitespace-nowrap text-gray-600 text-sm font-medium">Nora Alexandra</div>
                            <div className="text-slate-400 text-xs">demo@gmail.com</div>
                        </div>
                    </div>
                    <ProfileMenuList />
                </Popover.Panel>
            </Transition>
        </Popover>
    )
}
