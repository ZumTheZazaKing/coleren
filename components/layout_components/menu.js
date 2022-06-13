import Link from 'next/link';
import TutorialsButton from './tutorials_button';

export default function Menu(){

    return(
        <>
            <div className='mx-4 hidden sm:flex items-center'>
                <TutorialsButton/>
                <Link href='/editors/html_editor'>
                    <a className='text-xl font-bold text-white px-4 sm:p-0 mx-4 hover:text-slate-200 transition-colors'>Editor</a>
                </Link>
            </div>
        </>
    )
}