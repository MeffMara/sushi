import { BodyText, SubheaderText } from 'components/Text'
import { FormattedMessage } from 'react-intl'
import { configure } from 'mobx'
import Header from 'components/App/Header'
import ImageBlock from 'components/Image'
import firebase from 'firebase/compat/app'

import IntlProvider from 'i18n/IntlProvider'
// import LanguageButtons from 'components/LanguageButtons'

import { getDatabase } from 'firebase/database'
import Root from 'components/Root'
import useApp from 'hooks/useApp'

configure({
  enforceActions: 'never',
})

const App = () => {
  const { userCount } = useApp()
  const firebaseApp = firebase.apps[0]
  const setDatabase = getDatabase

  return (
    <Root>
      <IntlProvider>
        <div className="container">
          <div className="content"></div>
          <Header />
          <code>{JSON.stringify(firebaseApp.options, null, 2)}</code>
        </div>
      </IntlProvider>
    </Root>
  )
}

export default App
