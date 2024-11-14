import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import React from 'react'

const Page4 = () => {

    gsap.registerPlugin(ScrollTrigger)

    useGSAP(() => {
        gsap.from('.rotateText1', {
            transform: 'rotateX(-80deg)',
            opacity: 0,
            duration: 1,
            stagger: 1,
            scrollTrigger: {
                trigger: '.rotateText1',
                // markers: true,
                start: "top 60%",
                end: "bottom -270%",
                scrub: true
            }
        })
    })

    return (
        <>
            <div id='section4' className='bg-white text-center p-10'>
                <div className='rotateText1'>
                    <h1 className='text-[40vw] text-black font-[anzo4] leading-[32vw]'>HELPING</h1>
                </div>
                <div className='rotateText1'>
                    <h1 className='text-[40vw] text-[#9b9b9b] font-[anzo4] leading-[32vw]'>MY</h1>
                </div>
                <div className='rotateText1'>
                    <h1 className='text-[40vw] text-black font-[anzo4] leading-[32vw]'>CLIENTS</h1>
                </div>
                <div className='rotateText1'>
                    <h1 className='text-[40vw] text-black font-[anzo4] leading-[32vw]'>TO ACHIEVE</h1>
                </div>
                <div className='rotateText1'>
                    <h1 className='text-[40vw] text-[#9b9b9b] font-[anzo4] leading-[32vw]'>THEIR</h1>
                </div>
                <div className='rotateText1'>
                    <h1 className='text-[40vw] text-black font-[anzo4] leading-[32vw]'>DREAMS!</h1>
                </div>
            </div>
        </>
    )
}

export default Page4