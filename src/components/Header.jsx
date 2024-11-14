import React from 'react'
import 'remixicon/fonts/remixicon.css'

const Header = () => {
    return (
        <>
            <div className='absolute w-full flex items-center justify-end z-10 py-16 px-14 '>
                <button className='bg-black border-4 px-10 py-2 hover:bg-[#8c8c8c] rounded-full'>Hire Me</button>
                <i className="ri-more-2-line text-4xl"></i>
            </div>
        </>
    )
}

export default Header