import { useRouter } from 'next/router';
import { useState } from 'react';
import Editor from 'react-simple-code-editor';
import { highlight, languages } from 'prismjs/components/prism-core';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-markup';
import 'prismjs/themes/prism.css'; //Example style, you can use another

export default function HtmlEditor(){

    const router = useRouter();
    const [code, setCode] = useState(JSON.stringify(router.query.code).replace(/["\[\]:]/g,"").replace(/,/g,'\n') || "");

    return (
        <>
        <Editor
            value={code ? code : ""}
            onValueChange={code => setCode(code)}
            highlight={code => highlight(code, languages.html)}
            padding={10}
            style={{
                fontFamily: '"Fira code", "Fira Mono", monospace',
                fontSize: 16,
            }}
        />
      </>
    )
}