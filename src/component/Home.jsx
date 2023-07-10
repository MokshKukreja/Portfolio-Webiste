import React from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi';
import { Link } from 'react-scroll';
function Home() {
  return (
    <div name='home' className='bg-[#25274d] w-full h-screen'>


    {/* Container */}
    <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center w-[85%] md:w-[80%] h-full'>
        <p className='text-[#EA738D]'>Hi, my name is</p>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>Moksh Kukreja</h1>
        <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>I'm a Web Developer.</h2>
        <p className='text-[#8892b0] py-4 max-w-[700px]'>On this website, you will find a collection of my past projects, demonstrating my expertise in front-end development, back-end development, database management, and everything in between. Feel free to browse through my work and get in touch if you have any questions or would like to collaborate on an exciting project.
    </p>
    <div>
            <Link to='work' smooth={true} duration={1000}>
            <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#EA738D] hover:border-[#EA738D]'>View Work
        <span className='group-hover:rotate-90 duration-300'>
              <HiArrowNarrowRight className='ml-3 ' />
            </span></button>
          </Link>
    </div>
    </div>

    </div>
  )
}

export default Home