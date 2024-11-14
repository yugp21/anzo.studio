import React from 'react'
import image7 from '../assets/Images/Image7.webp'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const Page9 = () => {

  useGSAP(() => {
    gsap.from('.rotateImage', {
      scale: 0.5,        
      opacity: 0,          
      duration: 1.5,        
      ease: 'power2.out',   
      scrollTrigger: {
        trigger: '.rotateImage',
        start: "top 150%", 
        end: "top 20%",     
        scrub: true,       
      },
    });
  });


  return (
    <div className='h-full w-full flex items-center justify-center bg-white'>
        <img className='object-cover h-[75vw] rotateImage' src={image7} alt="" />
        <div>
          <h1 className='text-[1vw] leading-4 text-black font-[anzo3]'>IF YOU HAVE 30%</h1>
          <h1 className='text-[1vw] leading-4 text-black font-[anzo3]'>AND YOU GIVE 30%</h1>
          <h1 className='text-[1vw] leading-4 text-black font-[anzo3]'>YOU GIVE 100%</h1> 
        </div>
    </div>
  )
}

export default Page9