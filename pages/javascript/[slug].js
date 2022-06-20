import fs from 'fs';
import matter from 'gray-matter';
import md from 'markdown-it';
import Head from 'next/head';
import LinkButton from '../../components/link_button';
import { useEffect } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/outline'

export async function getStaticPaths(){
    const files = fs.readdirSync('tutorials/javascript_tutorials');
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
    const fileName = fs.readFileSync(`tutorials/javascript_tutorials/${slug}.md`, 'utf8');
    const { data: frontmatter, content } = matter(fileName);
    return {
        props: {
            frontmatter,
            content
        }
    }
}

export default function JSTutorial({frontmatter, content}) {

    useEffect(() => {
        const tutorial = document.querySelector("#tutorial")
        const links = tutorial.querySelectorAll('a');
        for (var i = 0; i < links.length; i++) {
           if(!(String(links[i].href).includes("#special")))return
           else{
                links[i].target = '_blank';
                links[i].className = 'bg-blue-500 text-white w-max  rounded-xl p-3 font-semibold no-underline shadow-lg'
           }
        }
    })

    return(
        <div className='mt-8 mb-8 px-5 mx-auto container'>
            <Head>
                <title>Coleren | {frontmatter.metaTitle}</title>
            </Head>

            <LinkButton
                leftIcon={<ChevronLeftIcon className='h-5 w-5'/>}
                title="JavaScript Tutorials"
                link="javascript"
                custom="bg-transparent color-black w-fit border-0 shadow-none hover:text-blue-500 transition-colors p-0 m-0"
            />
            <br/>
            <div id="tutorial" className='prose mx-auto'>
                <h1>{frontmatter.title}</h1>
                <div dangerouslySetInnerHTML={{ __html: md().render(content) }} />
            </div>
            <br/>
            <div className='flex-col sm:flex-row flex items-center justify-between'>
                {frontmatter.previous ?
                <LinkButton
                    leftIcon={<ChevronLeftIcon className='h-5 w-5'/>}
                    title={`Previous | ${frontmatter.previousTitle}`}
                    link={frontmatter.previous}
                    custom="bg-transparent color-black w-fit border-0 shadow-none hover:text-blue-500 transition-colors p-0 m-0"
                 /> : <div></div>}
                {frontmatter.next ? 
                <LinkButton
                    rightIcon={<ChevronRightIcon className='h-5 w-5'/>}
                    title={`Next | ${frontmatter.nextTitle}`}
                    link={frontmatter.next}
                    custom="bg-transparent color-black w-fit border-0 shadow-none hover:text-blue-500 transition-colors p-0 m-0"
                /> : <div></div>}
            </div>
        </div>
    )
}