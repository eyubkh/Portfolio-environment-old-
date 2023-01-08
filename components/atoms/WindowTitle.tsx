import { Blue100, White100 } from '@utils/tokens'
import styled from 'styled-components'

const WindowTitleComponent = styled.strong`
  display: grid;
  place-content: center;
  background-color: ${Blue100};
  text-align: center;
  height: 18px;
  width: 100%;
  color: ${White100};
`

interface PropsType {
  title: string
}

export const WindowTitle = ({ title = 'default text' }: PropsType): JSX.Element => {
  return <WindowTitleComponent>
    <h3>{title}</h3>
  </WindowTitleComponent>
}