import { Radar, Target } from 'lucide-react';
import React from 'react'

function Header() {
    return (
        <>
            <header className='flex items-center p-6 shadow-lg gap-4'>
                <Target size={45} className='text-red-500' />
                <div>
                    <h2 className='text-2xl font-bold'>TaskFlow</h2>
                    <p className='font-semibold'>Your Personal Productivity Champion</p>
                </div>
            </header>
        </>
    )
}

export default Header;