import Link from 'next/link'
import React from 'react'

const Hero = () => {
    return (
        <div className='bg-gray-900'>
            <div className='container mx-auto text-center text-white h-screen flex items-center'>
                <div className='mx-auto w-3/4 md:w-2/4'>
                    <h3 className='text-5xl font-bold text-center mb-5'>Bring Your Business to The Next Level</h3>
                    <p className='text-gray-500 mb-5'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet enim nam ex mollitia nulla a ab quos voluptates nemo eum?</p>
                    <Link href={"/"} >
                        <h5 className='bg-red-500 text-white py-2 rounded-xl hover:bg-red-800'>See All Portofolio</h5>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Hero
