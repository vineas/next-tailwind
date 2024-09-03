import Link from 'next/link'
import React from 'react'

const Navbar = () => {
    return (
        <div className='bg-gray-900 sticky top-0'>
            <div className='text-white container mx-auto py-4 flex justify-between items-center'>
                <h2 className='text-3xl font-bold'><Link href={"/"}>TailSimple</Link></h2>
                <ul className='flex bg-gray-900'>
                    <li className='px-7 py-1 hover:text-gray-500'><Link href={"/"}>Services</Link></li>
                    <li className='px-7 py-1 hover:text-gray-500'><Link href={"/"}>Portofolio</Link></li>
                    <li className='px-7 py-1 hover:text-gray-500'><Link href={"/"}>About</Link></li>
                    <li className='px-7 py-1 hover:text-gray-500'>
                        <Link className='hover:text-white hover:bg-red-600 border-2 border-red-500 py-2 px-5 rounded-xl' href={"/"}>
                            Getting Started
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar
