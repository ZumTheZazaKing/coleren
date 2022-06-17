import { Popover, Transition } from '@headlessui/react';
import { useState } from 'react';
import { usePopper } from 'react-popper';
import { ChevronDownIcon } from '@heroicons/react/outline'

const HtmlFilter = ({requiredTag, setRequiredTag}) => {

    const [showFilters, setShowFilters] = useState(false);
    let [referenceElement, setReferenceElement] = useState()
    let [popperElement, setPopperElement] = useState()
    let { styles, attributes } = usePopper(referenceElement, popperElement)
    const sharedClass = "font-bold rounded py-3 px-4 hover:bg-blue-500 hover:text-white hover:cursor-pointer";

    const chooseFilter = (tag) => {
        setRequiredTag(tag);
        setShowFilters(false);
    }

    return(
        <Popover className="relative">
           <Popover.Button
                ref={setReferenceElement}
                onClick={() => setShowFilters(!showFilters)}
            >
                <h3 className='text-xl font-bold flex items-center px-4 sm:p-0 mx-4'>
                   {requiredTag !== "html" ? 
                   `${requiredTag.charAt(0).toUpperCase()}${requiredTag.replace("-"," ").substring(1)}` : 
                   "All"} 
                   <ChevronDownIcon className="w-6 h-6 ml-2" />
                </h3>
            </Popover.Button>
            <Transition 
                show={showFilters}
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
                    onMouseOver={() => setShowFilters(true)}
                    onMouseOut={() => setShowFilters(false)}
                    className="absolute z-10 top-10 w-max"
                >
                    <div className="bg-slate-200 rounded-md shadow-lg grid grid-cols-1">
                        <p onClick={() => chooseFilter("html")} className={`${sharedClass}  ${requiredTag === "html" && "text-white bg-blue-500"}`}>All</p>
                        <p onClick={() => chooseFilter("introduction")} className={`${sharedClass} ${requiredTag === "introduction" && "text-white bg-blue-500"}`}>Introduction</p>
                        <p onClick={() => chooseFilter("universal-attributes")} className={`${sharedClass} ${requiredTag === "universal-attributes" && "text-white bg-blue-500"}`}>Universal attributes</p>
                    </div>
                </Popover.Panel>
            </Transition>
        </Popover>
    )
}
export default HtmlFilter;