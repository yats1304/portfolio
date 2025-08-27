import Image from 'next/image';
import React from 'react';

const Project = () => {
  return (
    <div className='pt-16 pb-16'>
      <h1 className='text-center text-2xl md:text-4xl xl:text-5xl font-bold text-white'>
        A small selection of recent <br /> <span className='text-cyan-300'>projects</span>
      </h1>
      <div className='w-[70%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 mt-16'>

        {/* 1st Project */}
        <a 
          href="https://travel-app-sandy-one.vercel.app" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="block cursor-pointer"
        >
          <Image
            src='/images/p1.jpg'
            alt='Travel App Frontend'
            width={800}
            height={650}
            className='rounded-xl'
          />
          <h1 className='mt-4 text-xl sm:text-2xl font-semibold text-white'>
            Travel App - Frontend
          </h1>
          <h1 className='pt-2 font-medium text-white/80'>
            React, Tailwind CSS, Vite
          </h1>
        </a>

        {/* 2nd Project */}
        <a 
          href="https://tasty-treat-cafe.vercel.app" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="block cursor-pointer"
        >
          <Image
            src='/images/p2.jpg'
            alt='Tasty Treat Cafe'
            width={800}
            height={650}
            className='rounded-xl'
          />
          <h1 className='mt-4 text-xl sm:text-2xl font-semibold text-white'>
            Tasty Treat Cafe
          </h1>
          <h1 className='pt-2 font-medium text-white/80'>
            React, Material UI, Vite
          </h1>
        </a>

        {/* 3rd Project */}
        <a 
          href="https://movie-browser-tmdb.vercel.app" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="block cursor-pointer"
        >
          <Image
            src='/images/p3.jpg'
            alt='Movie Browser'
            width={800}
            height={650}
            className='rounded-xl'
          />
          <h1 className='mt-4 text-xl sm:text-2xl font-semibold text-white'>
            Movie Browser
          </h1>
          <h1 className='pt-2 font-medium text-white/80'>
            React, API, Vite
          </h1>
        </a>

        {/* 4th Project */}
        <a 
          href="https://contact-us-page-gold.vercel.app" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="block cursor-pointer"
        >
          <Image
            src='/images/p4.jpg'
            alt='Contact Us Page'
            width={800}
            height={650}
            className='rounded-xl'
          />
          <h1 className='mt-4 text-xl sm:text-2xl font-semibold text-white'>
            Contact Us Page
          </h1>
          <h1 className='pt-2 font-medium text-white/80'>
            React, CSS, Vite
          </h1>
        </a>
      </div>
    </div>
  );
};

export default Project;
