import fs from 'fs';
import matter from 'gray-matter';
import Head from 'next/head';
import Link from 'next/link';
import { ChevronLeftIcon } from '@heroicons/react/outline';
import LinkButton from '../components/link_button';
import TutorialsLegend from '../components/tutorials_components/tutorials_legend';

export async function getStaticProps(){
    const files = fs.readdirSync('tutorials/css_tutorials');
    const tutorials = files.map(fileName => {
        const slug = fileName.replace('.md', '');
        const readFile = fs.readFileSync(`tutorials/css_tutorials/${fileName}`);
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

export default function CssHome({tutorials}) {

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
                <title>Coleren | CSS Tutorials</title>
                <meta name="description" content="Learn CSS" />
            </Head>
            <LinkButton
                leftIcon={<ChevronLeftIcon className='h-5 w-5'/>}
                title="Tutorials"
                link="tutorials"
                custom="bg-transparent color-black w-fit border-0 shadow-none hover:text-blue-500 transition-colors p-0 m-0"
            />
            <header>
                <h1 className='text-4xl font-bold text-center'>CSS Tutorials</h1>
            </header>
            <br/>
            <TutorialsLegend/>
            <br/>
            <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 p-4 md:p-0'>
                {tutorials.sort(compare).map(({ slug, frontmatter }) => (
                    <div
                        key={slug}
                        className={`border border-gray-200 ${frontmatter.colorClass} text-white m-2 rounded-xl overflow-hidden flex flex-col hover:text-blue-400 transition-colors shadow-lg font-semibold`}
                    >
                        <Link href={`/css/${slug}`}>
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
