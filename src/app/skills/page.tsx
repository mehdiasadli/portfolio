import Title from '@/components/ui/Title'
import { FC } from 'react'

interface SkillsProps {}

const Skills: FC<SkillsProps> = ({}) => {
  return (
    <main className='text-text-l p-3 min-h-screen'>
      <Title title='SKILLS' />
      <p>As a Software Developer I have some skills (I said that, because I have some</p>
      <p>other skills which are not related to Computer Science, e.g. Comedy)</p>
      <br />
      <p className='font-bold'>LIST</p>
      <ul className='list-disc'>
        <li>HTML, CSS and SASS</li>
        <li>Javascript and Typescript</li>
        <li>GIT (and have experience with Gitlab and Github)</li>
        <li>
          ReactJS and NextJS
          <ul>
            <li>Redux, React Query, Framer Motion etc.</li>
            <li>TailwindCss, MaterialUI, Antd, styled-components etc.</li>
          </ul>
        </li>
        <li>Alhorithms and Data Structures</li>
        <li>Figma (but I do not call myself a designer)</li>
      </ul>
      <br />
      <p>I also have knowledge on BACKEND and DBs</p>
      <ul className='list-disc'>
        <li>NodeJS and ExpressJS</li>
        <li>MongoDB and SQL</li>
        <li>Docker (had an experience)</li>
      </ul>
      <br />
      <p>and I am still learning new things. Thanks to the internet, it is really</p>
      <p>easier than it was in ancient times.</p>
    </main>
  )
}

export default Skills
