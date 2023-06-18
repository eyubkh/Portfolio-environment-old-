import { Black100, Blue100, White100 } from '@utils/tokens'
import useWindowContext from '@utils/hooks/useWindowContext'
import styled from 'styled-components'
import useProcessContext from '@utils/hooks/useProcessContext'

const WindowTitleComponent = styled.strong<any>`
  display: grid;
  place-content: center;
  // background-color: ${Blue100};
  background-color: ${({ isfocus }) => (isfocus ? Blue100 : White100)};
  text-align: center;
  height: 18px;
  width: 100%;
  color: ${White100};
  h3 {
    color: ${({ isfocus }) => (isfocus ? White100 : Black100)};
  }
`

export const WindowTitle = (): JSX.Element => {
  const { windowState } = useWindowContext()
  const { processState } = useProcessContext()

  return (
    <WindowTitleComponent
      isfocus={(processState.windowFocus === windowState.title) ? 1 : 0}
    >
      <h3>{windowState.title}</h3>
    </WindowTitleComponent>
  )
}
