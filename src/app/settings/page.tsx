import Field from '@/components/ui/Field'
import { FC } from 'react'

interface SettingsProps {}

export const metadata = {
  title: 'Settings',
  description: 'Settings section of this portfolio'
}

const Settings: FC<SettingsProps> = ({}) => {
  return (
    <main className='p-3 min-h-screen'>
      <p className='text-primary'>{'{'}</p>
      <p>
        &nbsp;&nbsp;<span className='text-text'>“</span>_comment
        <span className='text-text'>”: “</span>
        <span className='text-accent-d'>
          language can be either ‘en’ (for english) or ‘az’ (for azerbaijani)
        </span>
        <span className='text-text'>”,</span>
      </p>
      <p>
        &nbsp;&nbsp;<span className='text-text'>“</span>language
        <span className='text-text'>”: “</span>
        <span className='text-accent-d'>
          <Field initial='en' />
        </span>
        <span className='text-text'>”,</span>
      </p>
      <p>
        &nbsp;&nbsp;<span className='text-text'>“</span>_comment2
        <span className='text-text'>”: “</span>
        <span className='text-accent-d'>color mode can be either ‘light’ or ‘dark’</span>
        <span className='text-text'>”,</span>
      </p>
      <p>
        &nbsp;&nbsp;<span className='text-text'>“</span>color_mode
        <span className='text-text'>”: “</span>
        <span className='text-accent-d'>
          <Field initial='dark' />
        </span>
        <span className='text-text'>”,</span>
      </p>
      <p>
        &nbsp;&nbsp;<span className='text-text'>“</span>_comment3
        <span className='text-text'>”: “</span>
        <span className='text-accent-d'>
          After changing language and/or color mode hit the save...
        </span>
        <span className='text-text'>”</span>
      </p>
      <p className='text-primary'>{'}'}</p>
    </main>
  )
}

export default Settings
