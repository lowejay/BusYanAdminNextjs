'use client'

import Link from "next/link"
import { useUserStore } from "@/store"
import { useEffect, useState, useRef } from "react"
import { z } from 'zod'

export default function Employee() {
    const [search, setSearch] = useState('')
    const [employees, setEmployees] = useState([])
    const [render, setRender] = useState(false)
    const userStore = useUserStore()

    useEffect(() => {
        fetch(process.env.BE_URL + '/employees', {
            headers: {
                Authorization: `Bearer ${userStore.user?.token}`,
                'Content-Type': 'application/json',
            },
            method: 'GET'
        })
            .then(response => response.json())
            .then(result => setEmployees(result.data))
            .catch(error => console.error(error.message))

        setRender(false)
    }, [render])

    const handleDelete = async (itemId) => {
        const response = await fetch(process.env.BE_URL + `/employees/${itemId}`, {
            headers: {
                Authorization: `Bearer ${userStore.user.token}`,
                'Content-Type': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify({
                '_method': 'DELETE'
            })
        })
        const responseData = await response.json()
        setRender(true)
    }

    return (
        <>
            <div className="flex flex-col p-8">
                <p className="text-3xl font-bold">Account verification</p>

				<p class="text-sm text-gray-600 dark:text-gray-400">
					Manage account verifications.
				</p>
            </div>
            <div className="flex flex-row w-full">
                <Link href="/admin/employees" className="w-full text-center">
                    <p>Bus Operator</p>
                    <hr className="border border-gray-500 w-full" style={{ height: '2px' }} />
                </Link>
            </div>

            <div className="flex flex-col w-full p-8">
                <div className="flex flex-row w-full">
                    <div className="w-full">
                        <div className="relative w-2/6">
                            <input type="text" id="hs-leading-icon" name="hs-leading-icon" className="py-3 px-4 ps-11 block w-full border-gray-200 shadow-sm rounded-lg text-sm focus:z-10  disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400" placeholder="Search" onChange={(e) => setSearch(e.target.value)} />
                            <div className="absolute inset-y-0 start-0 flex items-center pointer-events-none z-20 ps-4">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                                </svg>

                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col mt-5">
                    <div className="-m-1.5 overflow-x-auto">
                        <div className="p-1.5 min-w-full inline-block align-middle">
                            <div className="border rounded-lg shadow overflow-hidden dark:border-gray-700 dark:shadow-gray-900">
                                <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                                    <thead className="bg-purple-default dark:bg-gray-700">
                                        <tr>
                                            <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-white uppercase dark:text-gray-400">ID No.</th>
                                            <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-white uppercase dark:text-gray-400">Full Name</th>
                                            <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-white uppercase dark:text-gray-400">Email</th>
                                            <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-white uppercase dark:text-gray-400">Contact Number</th>
                                            <th scope="col" className="px-6 py-3 text-end text-xs font-medium text-white uppercase dark:text-gray-400">Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                                        {employees.filter((item) => {
                                            return item.id_number.toString().includes(search) ||
                                                item.full_name.toString().includes(search) ||
                                                item.email.toLowerCase().includes(search.toLowerCase()) ||
                                                item.contact_number.toLowerCase().includes(search.toLowerCase()) ||
                                                item.employee_type.toString().includes(search)
                                        }).map((item, key) => (
                                            <tr key={key}>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">{item.id_number}</td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">{item.full_name}</td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">{item.email}</td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">{item.contact_number}</td>
                                                <td className="px-6 py-4 whitespace-nowrap text-end text-sm font-medium flex flex-row gap-2 justify-end">
                                                    <Link href={`/admin/employees/${item.id}`} className="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 disabled:opacity-50 disabled:pointer-events-none dark:text-blue-500 dark:hover:text-blue-400 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">Edit</Link>
                                                    <button onClick={(e => handleDelete(item.id))} type="button" className="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 disabled:opacity-50 disabled:pointer-events-none dark:text-blue-500 dark:hover:text-blue-400 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">Delete</button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}