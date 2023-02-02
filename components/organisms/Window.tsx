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
import useProcessContext from "@utils/useProcessContext"

const WindowComponent = styled.div<any>`
  position: absolute;
  display: flex;
  flex-direction: column;
  border: 1px solid red;
  width: ${({ isFullScreen, width }) => isFullScreen ? '100%' : width + 'px'};
  height: ${({ isFullScreen, height }) => isFullScreen ? '100vh' : height + 'px'};
  display: ${({ minimized }) => minimized ? 'none' : 'inherit'};
`

export const Window = ({ title, icon, children }: WindowTypes): JSX.Element => {
  const { state: windowState, dispatch: windowDispatch } = useWindowContext()
  const { isFullScreen, height, width, possition } = windowState

  const { state: processState } = useProcessContext()
  const { minimized, id } = processState.processes[title]
  console.log(minimized)
  useEffect(() => {
    windowDispatch({
      type: WindowActionOptions.ID,
      id
    })
    windowDispatch({
      type: WindowActionOptions.TITLE,
      payload: title
    })
  }, [])

  const props = {
    height,
    width,
    isFullScreen,
    minimized
  }

  return (
    <Draggable
      disabled={isFullScreen}
      handle="strong"
      position={possition}
      onDrag={(event: any, position: any) => handlerOnControlledDrag(event, position, windowDispatch)}
    >
      <WindowComponent id={windowState.id} {...props} >
        <WindowHeader />
        <WindowSubHeader />
        <WindowContent>
          {children}
        </WindowContent>
      </WindowComponent>
    </Draggable>
  )
}