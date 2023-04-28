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
      className='h-10 w-60 lg:w-24 [&>.short]:hidden lg:[&>.short]:inline lg:[&>.long]:hidden flex items-center justify-center bg-primary text-text-d hover:bg-primary-l cursor-pointer'
      target={item.target ? '_blank' : '_self'}
    >
      <span className='long'>{item.label}</span>
      <span className='short'>{item.short}</span>
    </Link>
  )
}

export default NavButton
