import Image from 'next/image'
import React from 'react'
import { signIn } from 'next-auth/react'

function Login() {
    return (
        <div className='grid place-items-center space-y-10 mt-12'>
            <Image
                src="/images/fb-logo.webp"
                height={200}
                width={200}
                objectFit="contain" />
            
            <h1 onClick={signIn} className='p-5 bg-blue-500 rounded-full text-white text-center cursor-pointer'>Login with Facebook</h1>
        </div>
    )
}

export default Login