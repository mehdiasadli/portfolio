import Title from '@/components/ui/Title'
import { FC } from 'react'

interface AboutProps {}

export const metadata = {
  title: 'About',
  description: 'About section of this portfolio'
}

const About: FC<AboutProps> = ({}) => {
  return (
    <main className='text-text-l p-3 min-h-screen'>
      <Title title='ABOUT ME SECTION' />
      <p>Hello! My name is Mehdi and I enjoy creating things that live on the internet.</p>
      <p>
        My interest in computers started back in 20-something (I can’t remember) when I decided to
        create
      </p>
      <p>a web site myself. -- Don’t tell anyone, but I was interested in Hacking as well --</p>
      <p>I graduated from Baku State University (on Computer Science) and now I am studying</p>
      <p>at University of Economics (on Application Software).</p>
      <p>I have a year of experience on FRONTEND WEB DEVELOPMENT.</p>
      <p>
        I mostly use React and NextJs, but with a fast learning curve (I am showing this graph down
        on
      </p>
      <p>this page, sorry for bad UI) I can easily learn a new tech.</p>
      <br />
      <p>Knowledge</p>
      <p>| &nbsp;&nbsp;&nbsp;&nbsp; *</p>
      <p>| &nbsp;&nbsp;&nbsp;&nbsp; *</p>
      <p>| &nbsp;&nbsp;&nbsp;&nbsp; *</p>
      <p>| &nbsp;&nbsp;&nbsp;&nbsp; *</p>
      <p>| &nbsp;&nbsp;&nbsp;&nbsp; *</p>
      <p>| &nbsp;&nbsp;&nbsp;&nbsp;*</p>
      <p>| &nbsp;&nbsp;&nbsp;*</p>
      <p>| &nbsp; *</p>
      <p>| &nbsp;*</p>
      <p>| *</p>
      <p>{'-------------------> Time'}</p>
    </main>
  )
}

export default About
