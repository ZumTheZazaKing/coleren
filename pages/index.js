import Head from 'next/head';
import Section from '../components/home_components/section';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Coleren</title>
        <meta name="description" content="Learn Web Development" />
      </Head>
      <main>
        <Section 
          title="Learn Coding" 
          desc="One step at a time" 
          button="Get Started" 
          link="tutorials" 
          custom="bg-blue-500 text-white"
          bg="bg-slate-300"
        />
        <Section 
          title="HTML" 
          desc="The skeleton of a web page" 
          button="Learn HTML" 
          link="html" 
          custom="bg-green-500 text-white"
          bg="bg-red-500"
        />
        <Section
          title="CSS"
          desc="The flesh of a web page"
          button="Learn CSS"
          link="css"
          custom="bg-green-500 text-white"
          bg="bg-blue-700"
        />
        <Section
          title="JavaScript"
          desc="The brain of a web page"
          button="Learn JavaScript"
          link="javascript"
          custom="bg-green-500 text-white"
          bg="bg-yellow-500"
        />

      </main>
    </div>
  )
}
