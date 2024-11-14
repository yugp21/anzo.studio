import React, { useRef, useState } from 'react'
import { gsap } from 'gsap';
import image1 from '../assets/Images/anzo1image.webp'
import image2 from '../assets/Images/Image2.webp'
// import TiltText from '../components/TiltText'
import Page1Bottom from '../components/Page1Bottom'
import { useGSAP } from '@gsap/react'
import TiltText from '../components/TiltText';

const Page1 = () => {

  const tiltRef = useRef(null);
  const [ xVal, setXVal ] = useState(0);
  const [ yVal, setYVal ] =useState(0);

  const mouseMoving = (e) => {

    setXVal((e.clientX - tiltRef.current.getBoundingClientRect().x - tiltRef.current.getBoundingClientRect().width/2)/30)
    setYVal(-(e.clientY - tiltRef.current.getBoundingClientRect().y - tiltRef.current.getBoundingClientRect().height/2)/30)

  };

  useGSAP(() => {
    gsap.to(tiltRef.current, {
      transform : `rotateX(${yVal}deg) rotateY(${xVal}deg)`,
      duration: 1,
      ease: 'elastic.out(1, 0.3)'
    })
  }, [xVal, yVal])

  return (
    <>
      <div onMouseMove={(e) => { mouseMoving(e) }} className='h-screen relative bg-white p-3'>
        <div id='page1-in' className='h-full relative py-10 px-16 w-full bg-cover shadow-xl shadow-gray-700 rounded-[30px]' style={{ backgroundImage: `url(${image1})` }}>
          <img className='h-[5.2vw] ' src={image2} alt="" />
          <TiltText abc={tiltRef} />
          <Page1Bottom />
        </div>
      </div>
    </>
  )
}

export default Page1
