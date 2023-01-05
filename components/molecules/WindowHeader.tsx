import { Black100 } from '@utils/tokens'
import { WindowClose } from 'components/atoms/WindowClose'
import { WindowMaximize } from 'components/atoms/WindowMaximize'
import { WindowMinimize } from 'components/atoms/WindowMinimize'
import { WindowTitle } from 'components/atoms/WindowTitle'
import styled from 'styled-components'

const WindowHeaderComponent = styled.div`
  display: flex;
  width: 100%;
  border: 1px solid ${Black100};
`
  
export const WindowHeader = () => {
  return (
    <WindowHeaderComponent>
      <WindowClose />
      <WindowTitle />
      <WindowMaximize />
      <WindowMinimize />
    </WindowHeaderComponent>
  )
}