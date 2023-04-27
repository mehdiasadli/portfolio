import Link from 'next/link'
import { FC } from 'react'

const EMAIL = 'asadlimehdi25@gmail.com'
const SUBJECT = 'Hi%2C%20Mehdi!'

const Button: FC = () => {
  return (
    <Link
      href={`mailto:${EMAIL}?subject=${SUBJECT}`}
      className='h-8 w-16 bg-primary text-text-d shadow-sm cursor-pointer transition-all focus:outline-none focus:ring-2 focus:ring-primary hover:scale-[90]'
    >
      Write me...
    </Link>
  )
}

export default Button
