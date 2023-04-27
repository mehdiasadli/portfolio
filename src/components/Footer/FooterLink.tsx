'use client'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { FC } from 'react'
import { FooterLinkType } from '.'

interface FooterLinkProps {
  item: FooterLinkType
}

const FooterLink: FC<FooterLinkProps> = ({ item }) => {
  const path = usePathname()
  const isActive = path === item.path

  return (
    <li aria-label={item.name}>
      <Link
        href={item.path}
        target={item.target ? '_blank' : '_self'}
        className={`${
          isActive && 'bg-background-l'
        } h-8 px-6 flex items-center justify-center gap-2 hover:bg-background-l cursor-pointer focus:outline-none focus:ring-1 focus:ring-primary`}
      >
        {item.icon && <span>{item.icon}</span>}
        <p>{item.label}</p>
      </Link>
    </li>
  )
}

export default FooterLink
