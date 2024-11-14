import React from 'react'

const TiltText = (props) => {
    return (
        <>
            <div id='tiltDiv' ref={props.abc} className='mt-[9.5vw] ml-2'>
                <h1 className='text-[4vw] leading-[2.5vw] font-[anzo1]'>I AM <span className='text-black font-[anzo1]'>DARK MODE</span>™</h1>
                <h1 className='text-[8vw] leading-[8.5vw] font-[anzo1]'>DESIGNER</h1>
                <h1 className='text-[4vw] leading-[2.6vw] font-[anzo1]'>TO HIRE</h1>
            </div>
        </>
    )
}

export default TiltText