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
import { ProcessActionOptions } from "types/lib/processTypes"

const WindowComponent = styled.div<any>`
  position: absolute;
  display: flex;
  flex-direction: column;
  border: 1px solid red;
  width: ${({ isFullScreen, width }) => isFullScreen ? '100%' : width + 'px'};
  height: ${({ isFullScreen, height }) => isFullScreen ? '100vh' : height + 'px'};
  display: ${({ minimized }) => minimized ? 'none' : 'inherit'};
  z-index: ${({ zIndex }) => zIndex + 1};
`

export const Window = ({ title, icon, children }: WindowTypes): JSX.Element => {
  const { state: windowState, dispatch: windowDispatch } = useWindowContext()
  const { isFullScreen, height, width, possition } = windowState

  const { state: processState, dispatch: processDispatch } = useProcessContext()
  const { minimized, id } = processState.processes[title]

  useEffect(() => {
    windowDispatch({
      type: WindowActionOptions.INIT,
      payload: { title, id }
    })
    processDispatch({
      type: ProcessActionOptions.INIT,
      payload: { icon, title }
    })
  }, [])

  const handler = () => {
    const el = document.getElementById(id)
    if (el) {
      el.style.zIndex = processState.zIndex
      processDispatch({
        type: ProcessActionOptions.Z_INDEX
      })
    }
  }
  const props = {
    height,
    width,
    isFullScreen,
    minimized,
    zIndex: processState.zIndex
  }

  return (
    <Draggable
      disabled={isFullScreen}
      handle="strong"
      position={possition}
      onDrag={(event: any, position: any) => handlerOnControlledDrag(event, position, windowDispatch)}
    >
      <WindowComponent
        key={windowState.id}
        id={windowState.id}
        onClick={handler}
        {...props}
      >
        <WindowHeader />
        <WindowSubHeader />
        <WindowContent>
          {children}
        </WindowContent>
      </WindowComponent>
    </Draggable>
  )
}