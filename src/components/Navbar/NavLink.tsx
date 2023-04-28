'use client'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { FC } from 'react'
import { NavItemType } from '.'

interface NavLinkProps {
  item: NavItemType
}

const NavLink: FC<NavLinkProps> = ({ item }) => {
  const path = usePathname()
  const isActive = path === item.path

  return (
    <li aria-label={item.name}>
      <Link
        className={`${
          isActive && 'text-accent dark:text-l-accent'
        }  h-10 px-8 md:text-[12px] md:px-6 flex items-center justify-center relative after:h-1 after:w-full after:absolute ${
          isActive ? 'after:bg-accent dark:after:bg-l-accent' : 'after:bg-text-l dark:after:bg-text-d'
        } after:bottom-0 ${
          isActive ? 'after:scale-100' : 'after:scale-0'
        } hover:after:scale-100 focus:outline-none focus:ring-1 focus:ring-accent-d dark:focus:ring-l-accent`}
        href={item.path}
      >
        {item.label}
      </Link>
    </li>
  )
}

export default NavLink
