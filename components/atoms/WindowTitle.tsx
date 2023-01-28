import { Blue100, White100 } from '@utils/tokens'
import styled from 'styled-components'
import { TitleType } from 'types/global'

const WindowTitleComponent = styled.strong`
  display: grid;
  place-content: center;
  background-color: ${Blue100};
  text-align: center;
  height: 18px;
  width: 100%;
  color: ${White100};
`

export const WindowTitle = ({ title = 'default text' }: TitleType): JSX.Element => {
  return <WindowTitleComponent>
    <h3>{title}</h3>
  </WindowTitleComponent>
}