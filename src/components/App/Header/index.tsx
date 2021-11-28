// import AppStore from 'stores/AppStore'
// import Button from 'components/Button'
import { BodyText, BodyTextDark, SubheaderText } from 'components/Text'
import { classnames } from '../../../classnames/tailwind'
import ClockImage from '../../../assets/images/clock.svg'
import LogoImage from '../../../assets/images/logo.png'
import SearchImage from '../../../assets/images/search.svg'

const fontSmall = classnames('text-xs')

export default function Header() {
  return (
    <header className="flex bg-white px-5 border-gray-200 max-w-full items-center justify-between">
      <div className="header__logo flex items-center">
        <img src={LogoImage} alt="logo" />
      </div>
      <BodyTextDark>
        Наш телефон:
        <span className={fontSmall + ' ' + 'flex flex-col'}>
          <a className="text-gold-yellow" href="tel:+996 705 188 955">
            +996 705 188 955
          </a>
          <a className="text-gold-yellow" href="tel:+996 555 188 955">
            +996 555 188 955
          </a>
        </span>
      </BodyTextDark>
      <div
        className={fontSmall + ' header__time-board flex flex-col items-center'}
      >
        <img src={ClockImage} alt="clock" />
        <BodyText>
          <span className="block"> работаем </span> с 10:00 до 00:00
        </BodyText>
      </div>
      <div className="header__search">
        <img src={SearchImage} alt="search" />
      </div>
    </header>
  )
}
