import styled from 'styled-components'
import { Black100 } from '@utils/tokens'
import { WindowClose } from 'src/components/atoms/WindowClose'
import { WindowMinimize } from 'src/components/atoms/WindowMinimize'
import { WindowTitle } from 'src/components/atoms/WindowTitle'
import useWindowContext from '@utils/hooks/useWindowContext'
import { handlerOnClickWindowMaximize } from '@utils/handlers/onClickWindowMaximize'
import { WindowMaximize } from 'src/components/atoms/WindowMaximize'

const WindowHeaderComponent = styled.div`
  display: flex;
  width: 100%;
  border: 1px solid ${Black100};
  user-select: none;
`

export const WindowHeader = (): JSX.Element => {
  const { windowDispatch } = useWindowContext()

  return (
    <WindowHeaderComponent
      onDoubleClick={() => handlerOnClickWindowMaximize(windowDispatch)}
    >
      <WindowClose />
      <WindowTitle />
      <WindowMinimize />
      <WindowMaximize />
    </WindowHeaderComponent>
  )
}
