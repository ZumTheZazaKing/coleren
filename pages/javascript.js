import fs from 'fs';
import matter from 'gray-matter';
import Head from 'next/head';
import Link from 'next/link';

export async function getStaticProps(){
    const files = fs.readdirSync('javascript_tutorials');
    const tutorials = files.map(fileName => {
        const slug = fileName.replace('.md', '');
        const readFile = fs.readFileSync(`javascript_tutorials/${fileName}`);
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

export default function JavascriptHome({tutorials}) {

    return (
        <div className='mt-8 mb-8 mx-auto container'>
            <Head>
                <title>Coleren | JavaScript Tutorials</title>
                <meta name="description" content="Learn JavaScript" />
            </Head>
            <header>
                <h1 className='text-4xl font-bold text-center'>JavaScript Tutorials</h1>
            </header>
            <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 p-4 md:p-0'>
                {tutorials.map(({ slug, frontmatter }) => (
                    <div
                        key={slug}
                        className='border border-gray-200 m-2 rounded-xl shadow-lg overflow-hidden flex flex-col'
                    >
                        <Link href={`/javascript/${slug}`}>
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
