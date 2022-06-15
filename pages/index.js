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
          id="section1"
          title="Learn Coding" 
          desc="One step at a time" 
          button="Get Started" 
          link="tutorials" 
          custom="bg-blue-500 text-white text-xl shadow-xl"
          sectionCustom="text-white"
        />
        <Section 
          id="section2"
          title="HTML" 
          desc="The skeleton of a web page" 
          button="Learn HTML" 
          link="html" 
          custom="bg-red-700 text-white text-xl shadow-xl"
          sectionCustom="text-white" 
        />
        <Section
          id="section3"
          title="CSS"
          desc="The flesh of a web page"
          button="Learn CSS"
          link="css"
          custom="bg-blue-700 text-white text-xl shadow-xl"
          sectionCustom="text-white"
        />
        <Section
          id="section4"
          title="JavaScript"
          desc="The brain of a web page"
          button="Learn JavaScript"
          link="javascript"
          custom="bg-yellow-500 text-white text-xl shadow-xl"
          sectionCustom="bg-yellow-500"
        />

      </main>
    </div>
  )
}
