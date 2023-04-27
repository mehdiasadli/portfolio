'use client'
import { FC } from 'react'
import { X } from 'lucide-react'
import Button, { EMAIL, MAILTO } from './Button'
import Anchor from '../ui/Anchor'
import { useRouter } from 'next/navigation'

const contactList = [
  { id: 1, key: 'EMail', value: EMAIL, link: MAILTO },
  {
    id: 2,
    key: 'Github Profile',
    value: '/mehdiasadli',
    link: 'https://github.com/mehdiasadli',
    target: true
  },
  {
    id: 3,
    key: 'Linkedin Profile',
    value: '/in/mehdiasadli',
    link: 'https://www.linkedin.com/in/mehdi-asadli-52143b194/',
    target: true
  }
]

const Modal: FC = () => {
  const router = useRouter()

  return (
    <section className='bg-background-d text-text-l w-[36rem] h-[24rem] p-4 flex flex-col items-center shadow-md relative'>
      <header className='relative w-full flex justify-center items-center'>
        <h1 className='text-xl'>CONTACT</h1>
        <X
          className='h-6 w-6 absolute right-0 cursor-pointer hover:text-text'
          onClick={router.back}
        />
      </header>
      <hr className='bg-white my-2 w-full' />
      <ul className='my-2 w-full'>
        {contactList.map((item) => (
          <li key={item.id} className='flex justify-between gap-2 my-2 items-center'>
            <p>{item.key}</p>
            <hr className='h-2 w-full border-dashed' />
            <Anchor label={item.value} link={item.link} target={item.target} />
          </li>
        ))}
      </ul>
      <article className='mt-5 text-center'>
        Got a question or proposal, or just want to say hello? Go ahead.
      </article>
      <Button />
    </section>
  )
}

export default Modal
