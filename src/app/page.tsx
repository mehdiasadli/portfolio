import Anchor from '@/components/ui/Anchor'
import Title from '@/components/ui/Title'
import { FC } from 'react'

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
    </main>
  )
}

export default Home
