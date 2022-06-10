import Head from 'next/head';
import LinkButton from '../components/link_button';

export default function Tutorials() {
  return (
    <div className='mt-8 mb-8 mx-auto container'>
      <Head>
        <title>Coleren | Tutorials</title>
        <meta name="description" content="Learn Web Development" />
      </Head>
      <h1 className='text-4xl font-bold text-center'>Tutorials</h1>
      <br/>
      <main className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 p-4 md:p-0'>
        <LinkButton title='HTML Tutorial' link='html' />
        <LinkButton title='CSS Tutorial' link='css' />
        <LinkButton title="JavaScript Tutorial" link='javascript' />
      </main>
    </div>
  )
}
