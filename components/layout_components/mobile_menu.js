
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import { Transition } from '@headlessui/react';
import { useState } from 'react';
import Link from 'next/link';
import MobileTutorialsButton from './mobile_tutorials_button';

export default function MobileMenu(){

    const [showMenu, setShowMenu] = useState(false);

    return (
        <>
        {/* Mobile Menu */}
            <div className='mx-5 sm:hidden flex items-center'>
                <MenuIcon onClick={() => setShowMenu(true)} className='h-7 w-7 text-white'/>
            </div>
            <Transition 
                show={showMenu} 
                className='fixed z-10 top-0 left-0 flex sm:hidden bg-slate-200 p-4 flex-col h-screen w-screen'
                enter="transition ease-in-out duration-300 transform"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transition ease-in-out duration-300 transform"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
            >
                <div className='pl-4 pb-4 border-b-4 border-slate-500 flex justify-end'>
                    <XIcon onClick={() => setShowMenu(false)} className='h-7 w-7'/>
                </div>
                <div className='flex flex-col'>
                    <Link href="/">
                        <a onClick={() => setShowMenu(false)} className='text-2xl font-bold mt-4 px-4 sm:p-0'>Home</a>
                    </Link>
                    <MobileTutorialsButton setShowMenu={setShowMenu}/>
                    <Link href="/editors/html_editor">
                        <a onClick={() => setShowMenu(false)} className='text-2xl font-bold mt-4 px-4 sm:p-0'>Editor</a>
                    </Link>
                </div>
            </Transition>
        </>
    )
}