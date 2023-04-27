'use client'
import Link from 'next/link'
import { FC, useState } from 'react'

export const EMAIL = 'asadlimehdi25@gmail.com'
const SUBJECT = 'Hi%2C%20Mehdi!'
export const MAILTO = `mailto:${EMAIL}?subject=${SUBJECT}`

const Button: FC = () => {
  const [isHovering, setIsHovering] = useState<boolean>(false)
  return (
    <Link
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      href={MAILTO}
      className='h-12 w-40 bg-primary text-text-d shadow-sm cursor-pointer transition-all focus:outline-none focus:ring-2 focus:ring-primary flex items-center justify-center absolute bottom-5'
    >
      Write me {isHovering && '-->'}
    </Link>
  )
}

export default Button
