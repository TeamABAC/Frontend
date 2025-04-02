"use client"
import React from 'react'
import Image from 'next/image'  

function Login() {
    return (
        <>
        <div className='w-full h-full flex justify-center items-center overflow-hidden min-h-screen m-0 p-0'>
            <img src="login-bg.svg" alt="background" draggable={false} className=' object-cover w-full min-w-full h-full min-h-full absolute -z-1 select-none select' />
            <div className=' bg-white w-[25rem] h-[21.25rem] z-10 flex flex-col items-center p-8 rounded-2xl shadow-[0px_4px_20px_0px_rgba(166,170,178,1)]'>
                <span className=' text-black font-bold text-2xl'>로그인</span>
                <input className=' w-[19rem] h-[2.75rem] flex-shrink-0 bg-in-gray rounded-[0.5rem]' />
            </div>
        </div>
        </>
    )
}

export default Login;