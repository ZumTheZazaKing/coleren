import fs from 'fs';
import matter from 'gray-matter';
import Head from 'next/head';
import Link from 'next/link';

export async function getStaticProps(){
    const files = fs.readdirSync('html_tutorials');
    const tutorials = files.map(fileName => {
        const slug = fileName.replace('.md', '');
        const readFile = fs.readFileSync(`html_tutorials/${fileName}`);
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

    return (
        <>
            <Head>
                <title>Coleren | HTML Tutorials</title>
                <meta name="description" content="Learn HTML" />
            </Head>
            <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 p-4 md:p-0'>
                {tutorials.map(({ slug, frontmatter }) => (
                    <div
                        key={slug}
                        className='border border-gray-200 m-2 rounded-xl shadow-lg overflow-hidden flex flex-col'
                    >
                        <Link href={`/html/${slug}`}>
                            <a>
                                <h1 className='p-4'>{frontmatter.title}</h1>
                            </a>
                        </Link>
                    </div>
                ))}
            </div>
        </>
    )
}
