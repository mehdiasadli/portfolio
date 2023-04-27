import { FC } from 'react'
import { Github, Linkedin } from 'lucide-react'
import FooterLink from './FooterLink'

interface FooterProps {}

const footerLinks = [
  {
    id: 1,
    name: 'Settings',
    path: '/settings',
    target: false,
    label: 'settings.json',
    icon: null
  },
  {
    id: 2,
    name: 'Linkedin',
    path: 'https://www.linkedin.com/in/mehdi-asadli-52143b194/',
    target: true,
    label: 'linkedin',
    icon: <Linkedin className='h-4 w-4' />
  },
  {
    id: 3,
    name: 'Github',
    path: 'https://github.com/mehdiasadli',
    target: true,
    label: 'github',
    icon: <Github className='h-4 w-4' />
  }
]

export type FooterLinkType = (typeof footerLinks)[0]

const Footer: FC<FooterProps> = ({}) => {
  return (
    <footer className='fixed bottom-0 bg-background-d text-text-l w-screen flex justify-between'>
      <ul>
        <FooterLink item={footerLinks[0]} />
      </ul>
      <ul className='flex'>
        {footerLinks.slice(1).map((item) => (
          <FooterLink key={item.id} item={item} />
        ))}
      </ul>
    </footer>
  )
}

export default Footer
