import React from 'react'
import ServiceCard from './ServiceCard'

const Services = () => {
  return (
    <div id='services' className='pt-16 pb-16'>
        <h1 className='text-center text-2xl md:text-4xl xl:text-5xl font-bold text-white'>
            Collaborate with brand <br/> and agencies to create <br/> impactful results
        </h1>
        <div className='w-[90%] sm:w-[70%] mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-10 m-20
        justify-items-center'>
            <div data-aos="fade-right" data-aos-anchor-placement="top-center">
                <ServiceCard
                icon="/images/s1.png"
                name="UI and UX"
                description="Designing seamless and engaging user experiences using modern web technologies and best UX practices."
                />
            </div>
             <div data-aos="fade-right" data-aos-anchor-placement="top-center" data-aos-delay="100">
                <ServiceCard
                icon="/images/s2.png"
                name="Web and Mobile App"
                description="Building fast, responsive, and scalable web interfaces for desktop and mobile using React and the latest frontend frameworks."
                />
            </div>
             <div data-aos="fade-right" data-aos-anchor-placement="top-center" data-aos-delay="200">
                <ServiceCard
                icon="/images/s3.png"
                name="Design & Creative"
                description="Transforming ideas into visually appealing and user-friendly digital products through thoughtful design and interactive creativity."
                />
            </div>
             <div data-aos="fade-right" data-aos-anchor-placement="top-center" data-aos-delay="300">
                <ServiceCard
                icon="/images/s4.png"
                name="Development"
                description="Developing robust and maintainable web solutions with clean code, performance optimization, and efficient deployment workflows."
                />
            </div>
        </div>
    </div>
  )
}

export default Services