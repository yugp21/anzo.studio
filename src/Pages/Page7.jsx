import React from 'react'
import video3 from '../assets/Videos/video3.mp4'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const Page7 = () => {

        useGSAP(() => {
        gsap.from('.flickdivs', {
            transform: 'rotateY(-270deg)',
            opacity: 0,
            duration: 2,
            stagger: 1,
            scrollTrigger: {
                trigger: '.flickdivs',
                // markers: true,
                start: "top 85%",
                end: "top -20%",
                scrub: true
            }
        })
    })

    
    return (
        <>
            <div className=' relative p-3 bg-white'>
                <div className='h-full w-full bg-black rounded-[2.3vw] flex relative justify-between'>
                    <div className=''>
                        <div className='font-[anzo4] px-[5vw] py-[5vw] text-[20vw] leading-[16vw]'>
                            <h1 className='tracking-wide z-20'>RIGHT</h1>
                            <h1 className='text-[#9b9b9b] tracking-wide z-20'>FIT</h1>
                            <video className='z-10 absolute top-[22vw] left-[18vw] h-[15vw]' autoPlay loop muted src={video3}></video>
                        </div>
                        <div className='mt-[5vw] px-[5vw] pb-[3vw] leading-[1.6vw]'>
                            <h5 className='font-[anzo3]'>SOUNDS GOOD?</h5>
                            <h5 className='font-[anzo3]'>THEN PLEASE <span className='font-[anzo2] pl-1.5'>EMAIL ME</span></h5>
                        </div>
                    </div>
                    <div className='py-[5vw] px-[11vw]'>
                        <div className='pb-[1.2vw] flickdivs'>
                            <h4 className='font-[anzo3] text-[#727272] text-[1.3vw] leading-3'>PERSONALITY</h4>
                            <p className='font-[anzo2]'>Business relationships build on trust and compassion vs how can I get more for less +/-</p>
                        </div>
                        <div className='pb-[1.2vw] flickdivs'>
                            <h4 className='font-[anzo3] text-[#727272] text-[1.3vw] leading-3'>APPROACH</h4>
                            <p className='font-[anzo2]'>Full dive into personality, goals and objectives with transparency of worq process vs template and unmanageable office routine +/-</p>
                        </div>
                        <div className='pb-[1.2vw] flickdivs'>
                            <h4 className='font-[anzo3] text-[#727272] text-[1.3vw] leading-3'>DESIGN</h4>
                            <p className='font-[anzo2]'>Design that is actually functional and helps to achieve results is design that works +/-</p>
                        </div>
                        <div className='pb-[1.2vw] flickdivs'>
                            <h4 className='font-[anzo3] text-[#727272] text-[1.3vw] leading-3'>FOCUS</h4>
                            <p className='font-[anzo2]'>How can I help and what can I do solve your problem or objective vs how can I sell you more +/-</p>
                        </div>
                        <div className='pb-[1.2vw] flickdivs'>
                            <h4 className='font-[anzo3] text-[#727272] text-[1.3vw] leading-3'>FIT</h4>
                            <p className='font-[anzo2]'>The perfect suit is the one fits you vs the one you can fit in. Choose wisely you are investing in yourself! +/-</p>
                        </div>
                        <div className='pb-[1.2vw] flickdivs'>
                            <h4 className='font-[anzo3] text-[#727272] text-[1.3vw] leading-3'>CORE VALUES</h4>
                            <p className='font-[anzo2]'>Time, trust and experience are resources we can not buy, yet we are sharing them and exchange +/-</p>
                        </div>
                        <div className='pb-[1.2vw] flickdivs'>
                            <h4 className='font-[anzo3] text-[#727272] text-[1.3vw] leading-3'>
                            TO CONSIDER</h4>
                            <p className='font-[anzo2]'>Your brand, your personal identity is the reflection of your passion and goals on your future; your first online impression matters +/-</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Page7