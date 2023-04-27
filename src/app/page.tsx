import Anchor from '@/components/ui/Anchor'
import Title from '@/components/ui/Title'
import { FC } from 'react'

let schema = {
  '@context': 'https://schema.org',
  '@type': 'Porfolio',
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': 'https://mehdiasadli.vercel.app'
  },
  headline: 'Software Dev. Portfolio',
  datePublished: '2023-04-27',
  author: [
    {
      '@type': 'Person',
      name: 'Mehdi Asadli',
      url: 'https://mehdiasadli.vercel.app/about'
    }
  ],
  publisher: {
    '@type': 'Person',
    name: 'Mehdi Asadli'
  },
  description: 'This is a portfolio website of a software developer'
}

const Home: FC = ({}) => {
  return (
    <main className='text-text-l p-3 min-h-screen'>
      <p>HI, My name is</p>
      <Title title='Mehdi Asadli' />
      <p>I build things for the web and the people using it.</p>
      <br />
      <p>I am a software developer.</p>
      <p>
        You can read more about me on <Anchor label='about-me.txt' link='/about' /> file.
      </p>
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
    </main>
  )
}

export default Home
