import Link from "next/link"
import { ChevronDownIcon } from '@heroicons/react/outline'
import { Disclosure, Transition } from '@headlessui/react';

export default function MobileTutorialsButton({setShowMenu}){

    return (
        <div className="mt-4">
            <Disclosure>
                {({ open }) => (
                    <>
                        <div className="flex items-center justify-between">
                            <Link href="/tutorials">
                                <a onClick={() => setShowMenu(false)} className='text-2xl font-bold px-4 sm:p-0'>
                                    Tutorials
                                </a>
                            </Link>
                            <Disclosure.Button>
                                <ChevronDownIcon className={`w-6 h-6 ml-2 transition-transform ${open ? "transform rotate-180" : ""}`} />
                            </Disclosure.Button>
                        </div>
                        <Transition
                            enter="transition ease-in-out duration-300 transform"
                            enterFrom="-translate-x-full opacity-0"
                            enterTo="translate-x-0 opacity-100"
                            leave="transition ease-in-out duration-300 transform"
                            leaveFrom="translate-x-0 opacity-100"
                            leaveTo="-translate-x-full opacity-0"
                        >
                            <Disclosure.Panel>
                                <div className="flex flex-col">
                                    <Link href="/html">
                                        <a onClick={() => setShowMenu(false)} className='text-xl font-semibold mt-4 px-4 sm:p-0'>
                                            HTML Tutorials
                                        </a>
                                    </Link>
                                    <Link href="/css">
                                        <a onClick={() => setShowMenu(false)} className='text-xl font-semibold mt-4 px-4 sm:p-0'>
                                            CSS Tutorials
                                        </a>
                                    </Link>
                                    <Link href="/javascript">
                                        <a onClick={() => setShowMenu(false)} className='text-xl font-semibold mt-4 px-4 sm:p-0'>
                                            JavaScript Tutorials
                                        </a>
                                    </Link>
                                </div>
                            </Disclosure.Panel>
                        </Transition>
                    </>
                )}
            </Disclosure>
        </div>
    )
}