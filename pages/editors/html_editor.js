import { useRouter } from 'next/router';
import Head from 'next/head';
import { useState } from 'react';
import Editor from 'react-simple-code-editor';
import { highlight, languages } from 'prismjs/components/prism-core';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-markup';
import 'prismjs/themes/prism.css'; //Example style, you can use another

export default function HtmlEditor(){

    const router = useRouter();
    const [code, setCode] = useState(router.query.code ? JSON.stringify(router.query.code).replace(/["\[\]:]/g,"").replace(/,/g,'\n') : "Write your code here...");
    const [iframeCode, setIframeCode] = useState(router.query.code ? `data:text/html;charset=utf-8,${encodeURI(code)}` : `data:text/html;charset=utf-8,${encodeURI("This is where the output will be")}`)

    const run = () => {
        setIframeCode(`data:text/html;charset=utf-8,${encodeURI(code)}`);
    }

    return (
        <div className='h-screen w-screen flex-col flex fixed top-0 left-0 bg-slate-500 sm:truncate'>
            <Head><title>Coleren | HTML Editor</title></Head>
            <div onClick={run} className='p-4'>
                <button className='bg-blue-500 text-white font-bold py-2 px-5 rounded-md shadow-md'>Run</button>
            </div>
           
           <div className='flex flex-col sm:flex-row overflow-auto sm:overflow-hidden  grow'>
                <div className="bg-zinc-100 w-full sm:w-2/4 h-screen sm:h-full overflow-auto">
                    <Editor
                        value={code}
                        onValueChange={code => setCode(code)}
                        highlight={code => highlight(code, languages.html)}
                        padding={10}
                        style={{
                            fontFamily: '"Fira code", "Fira Mono", monospace',
                            fontSize: 16,
                        }}
                    />
                    </div>
                <iframe src={iframeCode} title="output" className='w-full sm:w-2/4 h-screen sm:h-full bg-white overflow-auto p-0'/>
           </div>
        </div>
    )
}