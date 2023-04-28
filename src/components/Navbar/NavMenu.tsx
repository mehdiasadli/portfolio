'use client'
import { MenuIcon, X } from 'lucide-react'
import { usePathname } from 'next/navigation'
import { FC, useEffect, useState } from 'react'
import { actionList, navList } from '.'
import NavButton from './NavButton'
import NavLink from './NavLink'

interface NavMenuProps {}

const NavMenu: FC<NavMenuProps> = ({}) => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)
  const path = usePathname()

  useEffect(() => {
    setIsMenuOpen(false)
  }, [path])

  return (
    <>
      <div className='cursor-pointer mr-2 hidden sm:block'>
        <MenuIcon onClick={() => setIsMenuOpen(true)} />
      </div>
      {isMenuOpen && (
        <div className='fixed h-screen w-screen top-0 left-0 '>
          <aside className='fixed h-screen w-1/2 z-10 right-0 top-0 bg-background-d p-2'>
            <X
              className='h-6 w-6 absolute right-0 cursor-pointer hover:text-text'
              onClick={() => setIsMenuOpen(false)}
            />
            {navList.map((item) => (
              <NavLink key={item.id} item={item} />
            ))}
          </aside>
        </div>
      )}
    </>
  )
}

export default NavMenu
