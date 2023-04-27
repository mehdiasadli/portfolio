import Link from 'next/link'
import { FC } from 'react'

export const EMAIL = 'asadlimehdi25@gmail.com'
const SUBJECT = 'Hi%2C%20Mehdi!'
export const MAILTO = `mailto:${EMAIL}?subject=${SUBJECT}`

const Button: FC = () => {
  return (
    <Link
      href={MAILTO}
      className='h-12 w-40 bg-primary text-text-d shadow-sm cursor-pointer transition-all focus:outline-none focus:ring-2 focus:ring-primary hover:scale-110 flex items-center justify-center absolute bottom-5'
    >
      Write me...
    </Link>
  )
}

export default Button
