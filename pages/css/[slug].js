import fs from 'fs';
import matter from 'gray-matter';
import md from 'markdown-it';
import Head from 'next/head';
import LinkButton from '../../components/link_button';
import Editor from 'react-simple-code-editor';
import { highlight, languages } from 'prismjs/components/prism-core';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-css';
import 'prismjs/themes/prism.css';

export async function getStaticPaths(){
    const files = fs.readdirSync('css_tutorials');
    const paths = files.map(fileName => {
        const slug = fileName.replace('.md', '');
        return {
            params: {
                slug
            }
        }
    }
    )
    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({params:{slug}}){
    const fileName = fs.readFileSync(`css_tutorials/${slug}.md`, 'utf8');
    const { data: frontmatter, content } = matter(fileName);
    return {
        props: {
            frontmatter,
            content
        }
    }
}

export default function CssTutorial({frontmatter, content}) {

    const code = frontmatter.code ? JSON.stringify(frontmatter.code).replace(/["\[\]:]/g,"").replace(/,/g,'\n') : "";

    return(
        <div className='mt-8 mb-8 px-5 mx-auto container'>
            <Head>
                <title>Coleren | {frontmatter.metaTitle}</title>
            </Head>

            <div className='prose mx-auto'>
                <h1>{frontmatter.title}</h1>
                <div dangerouslySetInnerHTML={{ __html: md().render(content) }} />
            </div>

            <div className='mx-auto' style={{maxWidth:"65ch"}}>
                <Editor
                    value={code ? code : ""}
                    onValueChange={() => {return}}
                    highlight={(code => highlight(code, languages.html))}
                    padding={10}
                    style={{
                        fontFamily: '"Fira code", "Fira Mono", monospace',
                        fontSize: 16,
                    }}
                />
                <LinkButton 
                    title='Try it out' 
                    link='editors/html_editor' 
                    custom='bg-blue-500 text-white w-max py-0'
                    query={{
                        code:frontmatter.code
                    }}
                />
            </div>
        </div>
    )
}