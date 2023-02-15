import useWindowContext from "@utils/hooks/useWindowContext"
import { Black100, White100 } from "@utils/tokens"
import styled from "styled-components"
import { ChildrenType } from "types/global"

const WindowContentComponent = styled.div<any>`
  overflow: scroll;
  background-color: ${White100};
  border: 1px solid ${Black100};
  border-top: none;

  min-width: 200px;
  min-height: 100px;
  width: 700px;
  height: 400px;

  resize: ${({isFullScreen}) => isFullScreen ? 'none': 'both'};
`

export const WindowContent = ({ children }: ChildrenType): JSX.Element => {
  const { windowState } = useWindowContext()
  const { isFullScreen } = windowState

  return (
    <WindowContentComponent 
      isFullScreen={isFullScreen}
      style={{ 'width': isFullScreen ? '100%' : '700px', "height": isFullScreen ? '100%' : '400px' }}
      >
      {children}
    </WindowContentComponent>
  )
}