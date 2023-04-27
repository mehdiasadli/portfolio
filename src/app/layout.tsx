import './globals.css'
import { Courier_Prime } from 'next/font/google'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const courier = Courier_Prime({ subsets: ['latin'], weight: '400' })

export const metadata = {
  title: 'The Asadli',
  description: 'Created by Mehdi Asadli with NextJS'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className={courier.className}>
        <Navbar />
        <main className='py-10'>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
