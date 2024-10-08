import React from 'react'

const About = () => {
    return (
        <div id='about' className='w-11/12 md:container mx-auto py-20'>
            <div className="flex flex-col md:flex-row md:space-x-10">
                <div className="content-center">
                    <h3 className='text-5xl font-bold mb-5 text-center md:text-justify'>About TailSimple</h3>
                    <p className='mb-5 text-center md:text-justify'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga iure sint totam temporibus quos cupiditate dolorum voluptates, accusantium odio ipsum eos. Vitae quia assumenda nesciunt odio libero esse quasi eveniet.</p>
                    <p className='mb-5 pb-5 text-center md:text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam vel mollitia culpa repudiandae nostrum illum. Praesentium possimus exercitationem rem, qui incidunt laudantium obcaecati veritatis facilis.</p>
                </div>
                <div className='mx-auto md:w-1/3'>
                    <img src="https://placehold.co/400x550" className='mb-10' />
                </div>
            </div>
        </div>
    )
}

export default About
