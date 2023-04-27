import Link from 'next/link'
import { FC, ReactNode } from 'react'
import { FooterLinkType } from '.'

interface FooterLinkProps {
  item: FooterLinkType
}

const FooterLink: FC<FooterLinkProps> = ({ item }) => {
  return (
    <li aria-label={item.name}>
      <Link
        href={item.path}
        target={item.target ? '_blank' : '_self'}
        className='h-8 px-6 flex items-center justify-center gap-2 hover:bg-background-l cursor-pointer'
      >
        {item.icon && <span>{item.icon}</span>}
        <p>{item.label}</p>
      </Link>
    </li>
  )
}

export default FooterLink
