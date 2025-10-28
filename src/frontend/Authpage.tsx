import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';

const Authpage = ( ) => {
    const [showLogin, setShowLogin] = useState(true);
    const location = useLocation();

    useEffect(() => {
        if (location.state?.mode === "signup") {
            setShowLogin(false);
        } else {
            setShowLogin(true);
        }
    }, [location.state]);
    return (
    <div className='w-screen h-screen'>
        <p className='flex justify-center p-5'>auth page</p>
        <div className='w-full flex justify-center'>
                <div className='max-w-md gap-x-5 flex flex-col'>
                    <div className={`flex flex-col w-full gap-y-3 justify-center items-center ${showLogin ? "" : "hidden"}`}>
                        <p>sign in</p>
                        <input type="email" placeholder='email@exmaple.com' className='border'/>
                        <input type="password" placeholder='password' className='border'/>
                        <button className='border'>Sign In</button>
                    </div>
                    <div className={`flex flex-col w-full gap-y-3 justify-center items-center ${showLogin ? "hidden" : ""}`}>
                        <p>sign up</p>
                        <input type="email" placeholder='email@exmaple.com' className='border'/>
                        <input type="password" placeholder='password' className='border'/>
                        <button className='border'>Sign Up</button>
                    </div>
                </div>
            </div>
        </div>

  )
}

export default Authpage