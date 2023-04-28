'use client'
// import { Moon, Sun } from 'lucide-react'
import { FC } from 'react'

interface ThemeTogglerProps {}

// function setDark() {
//   localStorage.theme = 'dark'
// }
// function setLight() {
//   localStorage.theme = 'light'
// }
// function getTheme() {
//   return localStorage.getItem('theme') || 'light'
// }

const ThemeToggler: FC<ThemeTogglerProps> = ({}) => {
  return (
    <div className='h-8 px-6 flex items-center justify-center gap-2 hover:bg-background-l dark:hover:bg-secondary-l dark:text-text-l cursor-pointer '></div>
  )
}

export default ThemeToggler
