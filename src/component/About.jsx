import React from 'react';

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#25274d] text-gray-300'>
      <div className='  flex flex-col mx-auto justify-center items-center w-[85%] md:w-[80%] h-full'>
        <div className='  max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-[#EA738D]'>
              About
            </p>
          </div>
          <div></div>
          </div>
          <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
            <div className='sm:text-right text-4xl font-bold'>
              <p>Hi. Moksh Kukreja, Thank you for visiting, and I look forward to connecting with you!</p>
            </div>
            <div>
              <p>I'm a dedicated full stack developer. With a strong foundation in both front-end and back-end technologies, I specialize in crafting robust and user-friendly web applications. I have a deep passion for problem-solving and creating innovative solutions using the latest web development tools and frameworks. I have been honing my skills in various technologies listed below.</p>  
            </div>
          </div>
      </div>
    </div>
  );
};

export default About;