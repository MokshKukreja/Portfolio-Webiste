import React from 'react';
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';

function Footer() {
  return (
    <div className='bg-[#25274d] w-full h-[100%] flex justify-center items-center pb-10'>
      <ul className='md:hidden flex justify-center space-x-8'>
        <li className='w-[50px] h-[50px] flex justify-between items-center  duration-300 bg-blue-600'>
          <a className='flex justify-between items-center w-full text-gray-300 ' href="https://www.linkedin.com/in/moksh-kukreja-1285b215a/" target='blank'>
            <FaLinkedin size={40} />
          </a>
        </li>
        <li className='w-[50px] h-[50px] flex justify-between items-center  duration-300 bg-[#333333]'>
          <a className='flex justify-between items-center w-full text-gray-300 ' href="https://github.com/MokshKukreja" target='blank'>
            <FaGithub size={40} />
          </a>
        </li>
        <li className='w-[50px] h-[50px] flex justify-between items-center  duration-300 bg-[#ce5050]'>
          <a className='flex justify-between items-center w-full text-gray-300' href="mailto:mokshkukreja999@gmail.com" target='blank'>
            <HiOutlineMail size={40} />
          </a>
        </li>
        <li className='w-[50px] h-[50px] flex justify-between items-center duration-300 bg-[#565f69]'>
          <a className='flex justify-between items-center w-full text-gray-300 ' href="https://drive.google.com/file/d/17Z-84HB-AidFFbFw9oCLvy_XnAa1-gRg/view?usp=sharing" target='blank'>
            <BsFillPersonLinesFill size={40} />
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Footer;
