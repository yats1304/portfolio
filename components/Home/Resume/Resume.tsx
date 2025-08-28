import React from 'react'
import ResumeCard from './ResumeCard'
import { FaReact } from 'react-icons/fa'
import { SiPython } from 'react-icons/si';
import { MdSchool } from 'react-icons/md';
import { GiDiploma } from "react-icons/gi";



const Resume = () => {
  return (
    <div id='resume' className='pt-20 pb-16'>
        <div className='w-[90%] sm:w-[70%] mx-auto grid grid-cols-1 xl:grid-cols-2 gap-10'>
            {/* WORK PART */}
            <div>
                <h1 className='text-3xl sm:text-4xl font-bold text-white'>
                    My Work <span className='text-cyan-200'>Experience</span>
                </h1>
                <div className='mt-10' data-aos="zoom-in" data-aos-anchor-placement="top-center">
                    <ResumeCard 
                    Icon={FaReact} 
                    role="Frontend Developer"
                    description='Developed a responsive React web app for Tasty Treat Cafe that displays their 
                    menu, contact details, and location. Enables customers to browse offerings easily on any 
                    device and access cafe info via QR code.'
                    />
                    <ResumeCard 
                    Icon={SiPython} 
                    role="Programming in Python"
                    description='Completed an internship focused on Python programming, gaining hands-on 
                    experience in core Python fundamentals, data structures, and project structuring.'
                    />
                </div>
            </div>
            {/* EDUCATION PART */}
            <div>
                <h1 className='text-3xl sm:text-4xl font-bold text-white'>
                    My <span className='text-cyan-200'>Education</span>
                </h1>
                 <div className='mt-10' data-aos="zoom-in" data-aos-anchor-placement="top-center" data-aos-delay="300">
                    <ResumeCard 
                    Icon={MdSchool} 
                    role="Bachelor of Engineering - Computer Engineering"
                    date='Nov 2022 - July 2025'
                    description='Completed my Bachelor of Engineering degree in Computer Engineering at 
                    Pillai HOC College of Engineering and Technology, where I gained a strong foundation 
                    in software development, algorithms, and modern computing technologies.'
                    />
                    <ResumeCard 
                    Icon={GiDiploma} 
                    role="Diploma in Computer Engineering"
                    date='June 2019 - Aug 2022'
                    description='Completed an internship focused on Python programming, gaining hands-on 
                    experience in core Python fundamentals, data structures, and project structuring.'
                    />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Resume