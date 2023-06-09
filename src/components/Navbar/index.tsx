import { FC } from 'react'
import NavButton from './NavButton'
import NavLink from './NavLink'
import NavMenu from './NavMenu'

export const navList = [
  { id: 1, name: 'Home', label: 'home.txt', path: '/' },
  { id: 2, name: 'About', label: 'about-me.txt', path: '/about' },
  { id: 3, name: 'Projects', label: 'projects.txt', path: '/projects' },
  { id: 4, name: 'Skills', label: 'skills.txt', path: '/skills' }
]

export const actionList = [
  { id: 1, name: 'Get In Touch', label: 'GET_IN_TOUCH.exe', short: 'CONTACT', action: '/contact' },
  {
    id: 2,
    name: 'Download Resume',
    label: 'RESUME.pdf',
    short: 'CV',
    action: '/Resume.pdf',
    target: true
  }
]

export type NavItemType = (typeof navList)[0]
export type ActionItemType = (typeof actionList)[0]

interface NavbarProps {}

const Navbar: FC<NavbarProps> = ({}) => {
  return (
    <nav className='bg-background-d dark:bg-l-background text-text-l dark:text-text-d fixed w-screen flex justify-between items-center'>
      <ul className='flex sm:hidden'>
        {navList.map((item) => (
          <NavLink key={item.id} item={item} />
        ))}
      </ul>
      <ul className='flex'>
        {actionList.map((item) => (
          <NavButton key={item.id} item={item} />
        ))}
      </ul>
      <NavMenu />
    </nav>
  )
}

export default Navbar
