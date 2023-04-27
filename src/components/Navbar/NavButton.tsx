import Link from 'next/link'
import { FC } from 'react'
import { ActionItemType } from '.'

interface NavButtonProps {
  item: ActionItemType
}

const NavButton: FC<NavButtonProps> = ({ item }) => {
  return (
    <Link
      aria-label={item.name}
      href={item.action}
      className='h-10 w-60 flex items-center justify-center bg-primary text-text-d hover:bg-primary-l cursor-pointer'
      target={item.target ? '_blank' : '_self'}
    >
      {item.label}
    </Link>
  )
}

export default NavButton
