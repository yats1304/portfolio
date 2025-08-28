import Image from 'next/image';
import React from 'react'

type Props = {
    name: string;
    image: string;
    role: string;
    review: string;
}

const ClientReviewCard = ({ name, image, role, review } : Props) => {
  return (
    <div className='mt-2 mr-5'>
        <Image 
        src={image} 
        alt='client'
        width={60}
        height={60}
        className='rounded-full'
        />
       <p className='mt-6 text-base text-gray-200 font-medium'>&quot;{review}&quot;</p>
        <h1 className='mt-6 text-2xl font-bold text-cyan-200'>{name}</h1>
        <p className='mt-1 text-white'>{role}</p>
    </div>
  )
}

export default ClientReviewCard