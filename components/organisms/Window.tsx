import styled from "styled-components"
import Draggable from "react-draggable"
import { WindowContent } from "components/molecules/WindowContent"
import { WindowHeader } from "components/molecules/WindowHeader"
import { WindowSubHeader } from "components/molecules/WindowSubHeader"
import { useEffect } from "react"
import { WindowActionOptions } from "types/lib/windowTypes"
import { WindowTypes } from "types/global"
import useWindowContext from "@utils/useWindowContext"
import handlerOnControlledDrag from "@utils/handlerOnControlledDrag"

const WindowComponent = styled.div<any>`
  position: absolute;
  width: ${({ isFullScreen, width }) => isFullScreen ? '100%' : width + 'px'};
  height: ${({ isFullScreen, height }) => isFullScreen ? '100vh' : height + 'px'};
`

export const Window = ({ title, icon, children }: WindowTypes): JSX.Element => {
  const { state: windowState, dispatch: windowDispatch } = useWindowContext()
  const { isFullScreen, height, width, possition } = windowState

  useEffect(() => {
    windowDispatch({
      type: WindowActionOptions.ID
    })
    windowDispatch({
      type: WindowActionOptions.ICON,
      payload: icon
    })
    windowDispatch({
      type: WindowActionOptions.TITLE,
      payload: title
    })
  }, [])

  const props = {
    height,
    width,
    isFullScreen
  }

  return (
    <Draggable
      disabled={isFullScreen}
      handle="strong"
      position={possition}
      onDrag={(event: any, position: any) => handlerOnControlledDrag(event, position, windowDispatch)}
    >
      <WindowComponent {...props} >
        <WindowHeader title={title} />
        <WindowSubHeader />
        <WindowContent>
          {children}
        </WindowContent>
      </WindowComponent>
    </Draggable>
  )
}