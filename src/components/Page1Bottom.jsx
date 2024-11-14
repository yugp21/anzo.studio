import React from 'react'
import image3 from '../assets/Images/Image3.webp'
import image4 from '../assets/Images/Image4.webp'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap';

const Page1Bottom = () => {

    useGSAP(() => {
        gsap.to('#banner img', {
            rotate: 360,
            duration: 5,
            repeat: -1,
            ease: 'linear'
        })
    })

    return (
        <>
            <div className='absolute left-0 p-24 flex items-end justify-between top-[28vw] w-full'>
                <div className=''>
                    <h2 className='text-[1.3vw] font-[anzo2]'>BRAND DESIGN | WEBSITE DESIGN</h2>
                    <h2 className='text-[1.3vw] leading-[1vw] text-[#808080] font-[anzo3]'>BESPOKE FREELANCE</h2>
                </div>
                <div id="banner" className='absolute right-[5vw] top-[-1.1vw]'>
                    <img className='mb-5 w-[5.5vw]' src={image3} alt="" />
                    <img className='w-[5.5vw]' src={image4} alt="" />
                </div>
            </div>
        </>
    )
}

export default Page1Bottom