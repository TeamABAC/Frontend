"use client"
import React from 'react'
import Image from 'next/image'  

function Login() {
    return (
        <>
        <div className='w-full h-full flex justify-center items-center overflow-hidden min-h-screen m-0 p-0'>
            <div className=' bg-white w-96 h-80 z-10'></div>
            <img src="login-bg.svg" alt="background" draggable={false} className=' object-cover w-full min-w-full h-full min-h-full absolute -z-1 select-none select' />
        </div>
        </>
    )
}

export default Login;