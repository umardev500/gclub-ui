import { mdiDelete, mdiUpdate } from '@mdi/js'
import Icon from '@mdi/react'
import { getCoreRowModel, useReactTable, type ColumnDef, flexRender } from '@tanstack/react-table'

interface Props<T extends object> {
    data: T[]
    columns: Array<ColumnDef<T>>
}

export const UserList = <T extends object>({ data, columns }: Props<T>) => {
    const table = useReactTable({ data, columns, getCoreRowModel: getCoreRowModel() })
    return (
        <div className="mt-8 mb-8">
            <table className="table w-full text-left text-gray-600">
                <thead className="text-gray-600 uppercase bg-gray-50 text-sm ubuntu">
                    {table.getHeaderGroups().map((headerGroup) => (
                        <tr key={headerGroup.id}>
                            {headerGroup.headers.map((header) => (
                                <th className="font-medium px-6 py-3" key={header.id}>
                                    {header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}
                                </th>
                            ))}
                            <th className="font-medium px-6 py-3 text-center">Action</th>
                        </tr>
                    ))}
                </thead>

                <tbody>
                    {table.getRowModel().rows.map((row) => (
                        <tr key={row.id} className="border-b border-b-gray-100">
                            {row.getVisibleCells().map((cell) => (
                                <td className="px-6 py-4" key={cell.id}>
                                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                </td>
                            ))}
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
