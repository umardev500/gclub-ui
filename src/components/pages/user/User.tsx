import { Pagination, UserList } from '@components/organisms'
import { faker } from '@faker-js/faker'
import { mdiPlus } from '@mdi/js'
import Icon from '@mdi/react'
import React from 'react'

interface Item {
    id?: number
    username: string
    name: string
    role: string
    status: string
}

const dummyData = () => {
    const roles = ['Developer', 'Designer', 'Manager', 'Admin', 'Customer']
    const status = ['Hold', 'Active', 'Unavailable', 'Available']

    const items: Item[] = []
    for (let i = 0; i < 10; i++) {
        items.push({
            id: i,
            username: faker.internet.userName(),
            name: faker.name.fullName(),
            role: roles[Math.floor(Math.random() * roles.length)],
            status: status[Math.floor(Math.random() * status.length)],
        })
    }
    return items
}

export const User: React.FC = () => {
    return (
        <div className="container mx-auto bg-white rounded-md border py-6 px-8">
            <div className="flex gap-2 justify-between flex-wrap">
                <h3 className="text-gray-600 text-xl font-semibold">Account List</h3>
                <button className="bg-sky-500 w-full justify-center sm:w-auto sm:justify-normal whitespace-nowrap flex items-center gap-1 hover:bg-sky-600 px-4 py-1.5 rounded-md text-white">
                    <Icon path={mdiPlus} size={'20px'} />
                    <span>Add new user</span>
                </button>
            </div>
            <div>
                <UserList data={dummyData()} />

                <div className="mb-2 flex justify-center xl:justify-end">
                    <Pagination pageCount={4} />
                </div>
            </div>
        </div>
    )
}
