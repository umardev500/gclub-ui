import { UserList } from '@components/organisms'
import { type ColumnDef } from '@tanstack/react-table'
import React, { useMemo } from 'react'

interface Item {
    id?: number
    username: string
    name: string
    role: string
    status: string
}

const dummyData = () => {
    const items: Item[] = []
    for (let i = 0; i < 10; i++) {
        items.push({
            id: i,
            username: `username ${i}`,
            name: `Item ${i}`,
            role: `role ${i}`,
            status: `status ${i}`,
        })
    }
    return items
}

export const User: React.FC = () => {
    const cols = useMemo<Array<ColumnDef<Item>>>(() => {
        return [
            {
                header: 'Username',
                cell: (row) => row.renderValue(),
                accessorKey: 'username',
            },
            {
                header: 'Name',
                cell: (row) => row.renderValue(),
                accessorKey: 'name',
            },
            {
                header: 'Role',
                cell: (row) => row.renderValue(),
                accessorKey: 'role',
            },
            {
                header: 'Status',
                cell: (row) => row.renderValue(),
                accessorKey: 'status',
            },
        ]
    }, [])

    return (
        <div className="container m-auto bg-white rounded-md border py-6 px-8">
            <div>
                <h3 className="text-gray-600 text-xl font-semibold">Account List</h3>
            </div>
            <div>
                <UserList data={dummyData()} columns={cols} />
            </div>
        </div>
    )
}
