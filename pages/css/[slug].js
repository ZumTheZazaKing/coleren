import fs from 'fs';
import matter from 'gray-matter';
import md from 'markdown-it';
import Head from 'next/head';

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
    return(
        <div className='mt-8 mb-8 mx-auto container'>
            <Head>
                <title>Coleren | {frontmatter.metaTitle}</title>
            </Head>
            <div className='prose mx-auto'>
                <h1>{frontmatter.title}</h1>
                <div dangerouslySetInnerHTML={{ __html: md().render(content) }} />
            </div>
        </div>
    )
}