import Link from 'next/link'
import { FC } from 'react'

interface AnchorProps {
  label: string
  link: string
  target?: boolean
}

const Anchor: FC<AnchorProps> = ({ label, link, target = false }) => {
  return (
    <Link
      href={link}
      className='underline hover:text-accent-d'
      target={target ? '_blank' : '_self'}
    >
      {label}
    </Link>
  )
}

export default Anchor
