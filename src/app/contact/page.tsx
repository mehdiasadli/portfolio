import Modal from '@/components/Modal'
import { FC } from 'react'

interface ContactProps {}

const Contact: FC<ContactProps> = ({}) => {
  return (
    <main className='fixed h-screen w-screen top-10 z-10 flex items-center justify-center'>
      <Modal />
    </main>
  )
}

export default Contact
