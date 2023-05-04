import { mdiDelete, mdiUpdate } from '@mdi/js'
import Icon from '@mdi/react'
import React from 'react'

interface Props {
    data: any[]
}

export const UserList: React.FC<Props> = ({ data }) => {
    return (
        <div className="mt-8 mb-8">
            <table className="table w-full text-left text-gray-600">
                <thead className="text-gray-600 uppercase bg-gray-50 text-sm ubuntu">
                    <tr>
                        <th className="font-medium px-6 py-3">#</th>
                        <th className="font-medium px-6 py-3">Username</th>
                        <th className="font-medium px-6 py-3">Name</th>
                        <th className="font-medium px-6 py-3">Role</th>
                        <th className="font-medium px-6 py-3">Status</th>
                        <th className="font-medium px-6 py-3 text-center">Action</th>
                    </tr>
                </thead>

                <tbody>
                    {data.map((val, i) => (
                        <tr className="border-b border-b-gray-100">
                            <td className="px-6 py-4">{i + 1}</td>
                            <td className="px-6 py-4 font-medium">{val.username}</td>
                            <td className="px-6 py-4">{val.name}</td>
                            <td className="px-6 py-4">{val.role}</td>
                            <td className="px-6 py-4">{val.status}</td>
                            <td className="px-6 py-4text-center">
                                <div className="flex gap-1 justify-center">
                                    <button className="w-8 h-8 flex items-center justify-center text-white rounded-md bg-red-600 hover:bg-red-700">
                                        <Icon path={mdiDelete} size={'22px'} />
                                    </button>
                                    <button className="w-8 h-8 flex items-center justify-center text-white rounded-md bg-sky-600 hover:bg-sky-700">
                                        <Icon path={mdiUpdate} size={'22px'} />
                                    </button>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
