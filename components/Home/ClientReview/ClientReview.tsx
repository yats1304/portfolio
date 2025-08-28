"use client"
import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import ClientReviewCard from './ClientReviewCard';

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1324 },
    items: 3,
    slidesToSlide: 1 // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1324, min: 764 },
    items: 2,
    slidesToSlide: 1 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 764, min: 0 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  }
};

const ClientReview = () => {
  return (
    <div id="testimonials" className='pt-16 pb-16'>
        <h1 className='text-center text-2xl md:text-4xl xl:text-5xl font-bold text-white'>
            Kind words from satisfied <br/> {""}
            <span className='text-cyan-200'>clients</span>
        </h1>
        <div className='mt-16 w-[70%] mx-auto'>
            <Carousel
                showDots={false}
                responsive={responsive}
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={4000}
            >
                <ClientReviewCard
                    image="/images/c1.png"
                    name="Pradnyesh Save"
                    role="Owner, Tasty Treat Cafe"
                    review="Working with Yatish was fantastic. The website perfectly showcases our menu and location, and the QR code feature made it easy for our customers to access information. Highly recommend their work!"
                />
                <ClientReviewCard
                    image="/images/c2.png"
                    name="Shubham Karande"
                    role="Software Developer"
                    review="Yatish delivered an outstanding project with clean and efficient code. The UI is modern and user-friendly, exceeding our expectations."
                />
                <ClientReviewCard
                    image="/images/c3.png"
                    name="Swapnil Chavan"
                    role="Backend Developer"
                    review="Very professional and communicative. The integration with backend APIs was seamless, and the app performance is excellent."
                />
                <ClientReviewCard
                    image="/images/c4.png"
                    name="Aniket Mhatre"
                    role="Full Stack Developer"
                    review="Great collaboration throughout the project. Timely delivery with a focus on quality and user experience."
                />
                <ClientReviewCard
                    image="/images/c5.png"
                    name="Shreyash Shinde"
                    role="Cloud & Network Infrastructure Engineer"
                    review="Highly skilled developer with a knack for solving complex problems and delivering scalable solutions."
                />
            </Carousel>;
        </div>
    </div>
  )
}

export default ClientReview