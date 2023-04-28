import Title from '@/components/ui/Title'
import { FC } from 'react'

interface ProjectsProps {}

export const metadata = {
  title: 'Projects',
  description: 'Projects section of this portfolio'
}

const Projects: FC<ProjectsProps> = ({}) => {
  return (
    <main className='p-3 min-h-screen'>
      <Title title='PROJECTS SECTION' />
      <p>{"For now I don't have something to show here"}</p>
      <br />
      <p>Wait for the projects...</p>
    </main>
  )
}

export default Projects
