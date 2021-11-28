import { FC } from 'react'
import { classnames } from 'classnames/tailwind'

const whiteText = classnames('text-white')
const grayText = classnames('text-gray-300')
const darkGrayText = classnames('text-gray-800')

const fontSmall = classnames('text-xs')

const headerText = classnames(
  'text-3xl',
  'md:text-6xl',
  'font-bold',
  'text-center',
  'mb-6'
)
export const HeaderText: FC = ({ children }) => {
  return <p className={headerText}>{children}</p>
}

const mainDark = classnames(darkGrayText, 'font-medium', 'text-center')

const subheaderText = classnames(
  whiteText,
  'text-xl',
  'md:text-2xl',
  'font-bold',
  'text-center',
  'my-12'
)
export const SubheaderText: FC = ({ children }) => {
  return <p className={subheaderText}>{children}</p>
}

const bodyText = classnames(grayText, 'text-center', 'font-medium')
export const BodyText: FC = ({ children }) => {
  return <p className={bodyText}>{children}</p>
}

const bodyTextDark = classnames(mainDark)
export const BodyTextDark: FC = ({ children }) => {
  return <p className={bodyTextDark}>{children}</p>
}
