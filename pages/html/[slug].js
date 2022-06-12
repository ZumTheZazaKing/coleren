import fs from 'fs';
import matter from 'gray-matter';
import md from 'markdown-it';
import Head from 'next/head';
import LinkButton from '../../components/link_button';
import Editor from 'react-simple-code-editor';
import { highlight, languages } from 'prismjs/components/prism-core';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-markup';
import 'prismjs/themes/prism.css';
import { ChevronLeftIcon } from '@heroicons/react/outline'

export async function getStaticPaths(){
    const files = fs.readdirSync('html_tutorials');
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
    const fileName = fs.readFileSync(`html_tutorials/${slug}.md`, 'utf8');
    const { data: frontmatter, content } = matter(fileName);
    return {
        props: {
            frontmatter,
            content
        }
    }
}

export default function HtmlTutorial({frontmatter, content}) {

    const code = frontmatter.code ? JSON.stringify(frontmatter.code).replace(/["\[\]:]/g,"").replace(/,/g,'\n') : "";

    return(
        <div className='mt-8 mb-8 px-5 mx-auto container'>
            <Head>
                <title>Coleren | {frontmatter.metaTitle}</title>
            </Head>

            <LinkButton
                leftIcon={<ChevronLeftIcon className='h-5 w-5'/>}
                title="HTML Tutorials"
                link="html"
                custom="bg-transparent color-black w-fit border-0 shadow-none hover:text-blue-500 transition-colors p-0 m-0"
            />
            <br/>
            <div className='prose mx-auto'>
                <h1>{frontmatter.title}</h1>
                <div dangerouslySetInnerHTML={{ __html: md().render(content) }} />
            </div>
            <div className='mx-auto' style={{maxWidth:"65ch"}}>
                <div className='rounded-md p-3 bg-zinc-100'>
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
                </div>
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