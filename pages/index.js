import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Coleren</title>
        <meta name="description" content="Learn Web Development" />
      </Head>
      <h1>Hello world 👋</h1>
      <Link href="/html">HTML Tutorial</Link>
    </div>
  )
}
