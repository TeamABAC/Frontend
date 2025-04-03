"use client"
import { useRouter } from 'next/navigation';
import React from 'react'
import axios from 'axios';

function Login() {
    const router = useRouter();

    const handlesubmit = {

    }
    return (
        <>
        <div className='w-full h-full flex justify-center items-center overflow-hidden min-h-screen m-0 '>
            <img src="login-bg.svg" alt="background" draggable={false} className=' object-cover w-full min-w-full h-full min-h-full absolute -z-1 select-none select' />
            {/* login container */}
            <div className=' bg-[#FFF] w-[25rem] h-[21.25rem] z-10 flex flex-col items-center py-[2rem] px-[3rem] rounded-2xl shadow-[0px_4px_20px_0px_rgba(166,170,178,1)]'>
                <span className=' text-black font-bold text-2xl'>로그인</span>
                {/*input container*/}
                <div className=' flex flex-col gap-3 mt-5 w-[19rem] h-[6.25rem]'>
                    <input className=' w-[19rem] h-[2.75rem] bg-in-gray rounded-[0.5rem] p-3 text-black' placeholder='이메일' />
                    <input className=' w-[19rem] h-[2.75rem] bg-in-gray rounded-[0.5rem] p-3 text-black' placeholder='비밀번호' />
                </div>
                <span className='mt-[0.4rem] text-[0.625rem] font-[200] ml-auto text-gray'>비밀번호를 잊었어요</span>
                {/* 로그인 함수 제출하는 버튼 */}
                <button className='bg-namblue rounded-2xl w-[6rem] h-[3rem] mt-[1.6rem] font-[700] text-[1rem] text-white'>로그인</button>
                {/* 회원가입으로 이동하는 링크 */}
                <div className=' w-[7rem] h-[0.625rem] mt-[1.69rem] flex'>
                    <span className=' text-[0.625rem] text-gray font-[200]'>계정이 없다면?</span>
                    <span className=' text-[0.625rem] text-namblue font-[200]'>회원가입</span>
                </div>
            </div>
        </div>
        </>
    )
}

export default Login;