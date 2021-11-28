import { FC } from 'react'
import { classnames } from 'classnames/tailwind'

const root = classnames('container', 'px-0', 'mx-auto', 'max-w-4xl')
const Root: FC = ({ children }) => {
  return <div className={root}>{children}</div>
}

export default Root
