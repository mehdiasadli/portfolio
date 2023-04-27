import Modal from '@/components/Modal'
import { FC } from 'react'

interface ContactProps {}

export const metadata = {
  title: 'Contact',
  description: 'Contact section of this portfolio'
}

const Contact: FC<ContactProps> = ({}) => {
  return (
    <main className='fixed h-screen w-screen top-10 z-10 flex items-center justify-center'>
      <Modal />
    </main>
  )
}

export default Contact
