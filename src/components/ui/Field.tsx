import { FC } from 'react'

interface FieldProps {
    initial: string
}

const Field: FC<FieldProps> = ({initial}) => {
  return <span role='textbox' className='bg-background focus:outline-none' contentEditable>{initial}</span>
}

export default Field
