// import AppStore from 'stores/AppStore'
// import Button from 'components/Button'
import { SubheaderText } from 'components/Text'
import Logo from 'models/Logo'

export default function ImageBlock(props: any) {
  return (
    <div>
      <SubheaderText>{props.title}</SubheaderText>
    </div>
  )
}
