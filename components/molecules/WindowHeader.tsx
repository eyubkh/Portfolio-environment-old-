import styled from 'styled-components'
import { Black100 } from '@utils/tokens'
import { WindowClose } from 'components/atoms/WindowClose'
import { WindowMaximize } from 'components/atoms/WindowMaximize'
import { WindowMinimize } from 'components/atoms/WindowMinimize'
import { WindowTitle } from 'components/atoms/WindowTitle'
import { TitleType } from 'types/global'

const WindowHeaderComponent = styled.div`
  display: flex;
  width: 100%;
  border: 1px solid ${Black100};
`

export const WindowHeader = ({ title }: TitleType): JSX.Element => {
  return (
    <WindowHeaderComponent>
      <WindowClose />
      <WindowTitle title={title} />
      <WindowMaximize />
      <WindowMinimize />
    </WindowHeaderComponent>
  )
}