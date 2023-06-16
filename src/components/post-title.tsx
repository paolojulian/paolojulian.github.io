import { ReactNode } from 'react'

type Props = {
  children?: ReactNode
}

const PostTitle = ({ children }: Props) => {
  return (
    <h1 className="dark:text-white text-6xl md:text-6xl lg:text-7xl font-bold tracking-tighter leading-tight md:leading-none mb-2 md:mb-4 text-center md:text-left">
      {children}
    </h1>
  )
}

export default PostTitle
