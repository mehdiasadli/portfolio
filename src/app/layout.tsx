import './globals.css'
import { Courier_Prime } from 'next/font/google'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Lines from '@/components/Lines'

const courier = Courier_Prime({ subsets: ['latin'], weight: '400' })

export const metadata = {
  title: "Mehdi's Portfolio",
  description: 'Created by Mehdi Asadli with NextJS'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className={courier.className}>
        <Navbar />
        <div className='py-10 bg-background dark:bg-l-background-l flex text-text-l dark:text-text-d'>
          <Lines />
          {children}
        </div>
        <Footer />
      </body>
    </html>
  )
}
