import { Popover, Transition } from '@headlessui/react';
import Link from 'next/link';
import { useState } from 'react';
import { usePopper } from 'react-popper';
import { ChevronDownIcon } from '@heroicons/react/outline'

export default function TutorialsButton(){

    const [showTutorials, setShowTutorials] = useState(false);
    let [referenceElement, setReferenceElement] = useState()
    let [popperElement, setPopperElement] = useState()
    let { styles, attributes } = usePopper(referenceElement, popperElement)

    return(
        <Popover className="relative">
           <Popover.Button
                ref={setReferenceElement}
                onMouseOver={() => setShowTutorials(true)}
                onMouseOut={() => setShowTutorials(false)}
            >
                <Link href="/tutorials">
                    <a className='text-xl font-bold flex items-center text-white px-4 sm:p-0 mx-4 hover:text-slate-200 transition-colors'>
                        Tutorials <ChevronDownIcon className="w-6 h-6 ml-2" />
                    </a>
                </Link>
            </Popover.Button>
            <Transition 
                show={showTutorials}
                enter="transition ease-out duration-200"
                enterFrom="opacity-0"
                enterTo="opacity-100 "
                leave="transition ease-in duration-150"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
            >
                <Popover.Panel 
                    ref={setPopperElement}
                    style={styles.popper}
                    {...attributes.popper}
                    onMouseOver={() => setShowTutorials(true)}
                    onMouseOut={() => setShowTutorials(false)}
                    className="absolute z-10 top-10 w-max"
                >
                    <div className="bg-slate-200 rounded-md shadow-lg grid grid-cols-1">
                        <Link href="/html">
                            <a onClick={() => {setShowTutorials(false)}} className='font-bold py-3 px-4 hover:bg-blue-500 hover:text-white'>HTML Tutorials</a>
                        </Link>
                        <Link href="/css">
                            <a onClick={() => {setShowTutorials(false)}} className='font-bold py-3 px-4 hover:bg-blue-500 hover:text-white'>CSS Tutorials</a>
                        </Link>
                        <Link href="/javascript">
                            <a onClick={() => {setShowTutorials(false)}} className='font-bold py-3 px-4 hover:bg-blue-500 hover:text-white'>JavaScript Tutorials</a>
                        </Link>
                    </div>
                </Popover.Panel>
            </Transition>
        </Popover>
    )
}