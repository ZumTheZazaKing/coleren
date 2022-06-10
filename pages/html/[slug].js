import fs from 'fs';
import matter from 'gray-matter';
import md from 'markdown-it';
import Head from 'next/head';

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
    return(
        <>
            <Head>
                <title>Coleren | {frontmatter.metaTitle}</title>
            </Head>
            <div className='prose mx-auto'>
                <h1>{frontmatter.title}</h1>
                <div dangerouslySetInnerHTML={{ __html: md().render(content) }} />
            </div>
        </>
    )
}