import { Blue100, White100 } from '@utils/tokens'
import useWindowContext from '@utils/useWindowContext'
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

export const WindowTitle = (): JSX.Element => {
  const { windowState } = useWindowContext()

  return <WindowTitleComponent>
    <h3>{windowState.title}</h3>
  </WindowTitleComponent>
}