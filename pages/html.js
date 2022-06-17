import fs from 'fs';
import matter from 'gray-matter';
import Head from 'next/head';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { ChevronLeftIcon } from '@heroicons/react/outline';
import LinkButton from '../components/link_button';
import TutorialsLegend from '../components/tutorials_components/tutorials_legend';
import HtmlFilter from '../components/tutorials_components/html_filter';

export async function getStaticProps(){
    const files = fs.readdirSync('tutorials/html_tutorials');
    const tutorials = files.map(fileName => {
        const slug = fileName.replace('.md', '');
        const readFile = fs.readFileSync(`tutorials/html_tutorials/${fileName}`);
        const { data: frontmatter } = matter(readFile);

        return {
            slug,
            frontmatter
        }
    })
    return {
        props: {
          tutorials,
        },
    };
}

export default function HtmlHome({tutorials}) {

    const [requiredTag, setRequiredTag] = useState("html");
    const [filteredTutorials, setFilteredTutorials] = useState(tutorials);

    useEffect(() => {
        setFilteredTutorials(tutorials.filter(tutorial => tutorial.frontmatter.tags.includes(requiredTag)));
    }, [tutorials, requiredTag])

    function compare( a, b ) {
        if ( a.frontmatter.id < b.frontmatter.id ){
          return -1;
        }
        if ( a.frontmatter.id > b.frontmatter.id ){
          return 1;
        }
        return 0;
    }

    return (
        <div className='mt-8 mb-8 mx-auto container'>
            <Head>
                <title>Coleren | HTML Tutorials</title>
                <meta name="description" content="Learn HTML" />
            </Head>
            <LinkButton
                leftIcon={<ChevronLeftIcon className='h-5 w-5'/>}
                title="Tutorials"
                link="tutorials"
                custom="bg-transparent color-black w-fit border-0 shadow-none hover:text-blue-500 transition-colors p-0 m-0"
            />
            <header>
                <h1 className='text-4xl font-bold text-center'>HTML Tutorials</h1>
            </header>
            <br/>
            <div className='flex flex-col sm:flex-row items-center sm:justify-between'>
                <TutorialsLegend/>
                <HtmlFilter requiredTag={requiredTag} setRequiredTag={setRequiredTag}/>
            </div>
            <br/>
            <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 p-4 md:p-0'>
                {filteredTutorials.sort(compare).map(({ slug, frontmatter }) => (
                    frontmatter.tags.includes(requiredTag) &&
                    <div
                        key={slug}
                        className={`border ${frontmatter.colorClass} text-white border-gray-200 m-2 rounded-xl overflow-hidden flex flex-col hover:text-blue-400 transition-colors shadow-lg font-semibold`}
                    >
                        <Link href={`/html/${slug}`}>
                            <a>
                                <h1 className='p-4'>{frontmatter.title}</h1>
                            </a>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    )
}
