import styled from "styled-components"
import Draggable from "react-draggable"
import { WindowContent } from "src/components/molecules/WindowContent"
import { WindowHeader } from "src/components/molecules/WindowHeader"
import { useEffect } from "react"
import { WindowDispatchEnum } from "types/lib/windowTypes"
import useWindowContext from "@utils/hooks/useWindowContext"
import handlerOnControlledDrag from "@utils/handlers/onControlledDrag"
import useProcessContext from "@utils/hooks/useProcessContext"
import { ProcessDispatchEnum } from "types/lib/processTypes"
import { handlerOnClickWindowFocus } from "@utils/handlers/onClickWindowfocus"
import { Grey100 } from "@utils/tokens"
import { WindowPropsTypes } from "types/global"

const WindowComponent = styled.div<any>`
  position: absolute;
  display: flex;
  flex-direction: column;
  border: 1px solid ${Grey100};
  display: ${({ minimized, isLoading }) => minimized | isLoading ? 'none' : 'initial'};
  z-index: ${({ isFocus }) => isFocus ? 2 : 1};
  overflow: hidden;
  resize: ${({ isFullScreen }) => isFullScreen ? 'none' : 'both'};
`

export const Window = ({ title, icon, children, setHeight = 400, setWidth = 700 }: WindowPropsTypes): JSX.Element => {
  const { windowState, windowDispatch } = useWindowContext()
  const { isFullScreen, possition, isLoading, height, width } = windowState

  const { processState, processDispatch } = useProcessContext()
  const { minimized, id } = processState.processes[title]

  useEffect(() => {
    processDispatch({
      type: ProcessDispatchEnum.INIT,
      payload: { icon, title }
    })
    windowDispatch({
      type: WindowDispatchEnum.INIT,
      payload: { 
        title, 
        id,
        height: setHeight,
        width: setWidth
      }
    })
  }, [])

  return (
    <Draggable
      disabled={isFullScreen}
      handle="strong"
      defaultPosition={{
        x: ((document.body.clientWidth / 2) - (width / 2)) + Math.random() * 50 - 25,
        y: ((document.body.clientHeight / 2) - (height / 2)) + Math.random() * 50 - 25
      }}
      position={possition}
      onDrag={(event, position: { x: number, y: number}) => {
        handlerOnControlledDrag(position, windowDispatch)
      }}
    >
      <WindowComponent
        id={id} 
        onClick={() => handlerOnClickWindowFocus(processDispatch, title)}
        style={{ 'width': isFullScreen ? '100%' : width + 'px', "height": isFullScreen ? '100%' : height + 'px' }}
        isLoading={isLoading}
        isFullScreen={isFullScreen}
        minimized={minimized}
        isFocus={processState.windowFocus === title}
      >
        <WindowHeader />
        <WindowContent>
          {children}
        </WindowContent>
      </WindowComponent>
    </Draggable>
  )
}