import { FC } from 'react'

interface LinesProps {}

const list = Array.from({ length: 45 }).map((_, index) =>
  index + 1 < 10 ? '0' + (index + 1) : index + 1
)

const Lines: FC<LinesProps> = ({}) => {
  return (
    <div className='p-3 min-h-screen text-text select-none'>
      {list.map((item) => (
        <p key={item}>{item}</p>
      ))}
    </div>
  )
}

export default Lines
