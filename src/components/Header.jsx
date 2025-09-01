import { Radar, Target } from 'lucide-react';
import React from 'react'

function Header() {
    return (
        <>
            <header className='flex items-center p-6 shadow-lg gap-4'>
                <Target size={45} className='text-red-500' />
                <div>
                    <h2 className='text-2xl font-bold'>Task Management App</h2>
                    <p className='font-semibold'>Manage the Tasks Like Pro</p>
                </div>
            </header>
        </>
    )
}

export default Header;