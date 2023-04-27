import { FC } from 'react'
import NavLink from './NavLink'

const navList = [
  { id: 1, name: 'Home', label: 'home.txt', path: '/' },
  { id: 2, name: 'About', label: 'about-me.txt', path: '/about' },
  { id: 3, name: 'Projects', label: 'projects.txt', path: '/projects' },
  { id: 4, name: 'Skills', label: 'skills.txt', path: '/skills' }
]

export type NavItemType = (typeof navList)[0]

interface NavbarProps {}

const Navbar: FC<NavbarProps> = ({}) => {
  return (
    <nav className='bg-background-d text-text-l fixed w-screen'>
      <ul className='flex'>
        {navList.map((item) => (
          <NavLink key={item.id} item={item} />
        ))}
      </ul>
    </nav>
  )
}

export default Navbar
