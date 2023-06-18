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
  display: ${({ minimized, isloading }) => minimized | isloading ? 'none' : 'initial'};
  z-index: ${({ isfocus }) => isfocus ? 2 : 1};
  overflow: hidden;
  resize: ${({ isfullscreen }) => isfullscreen === 'true' ? 'none' : 'both'};
`

export const Window = ({ title, icon, children, setHeight = 400, setWidth = 700, setfullscreen = false }: WindowPropsTypes): JSX.Element => {
  const { windowState, windowDispatch } = useWindowContext()
  const { isfullscreen, possition, isloading, height, width } = windowState

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
        width: setWidth,
        isfullscreen: setfullscreen,
      }
    })
  }, [])

  return (
    <Draggable
      disabled={isfullscreen}
      handle="strong"
      position={possition}
      onDrag={(event, position: { x: number, y: number}) => {
        handlerOnControlledDrag(position, windowDispatch)
      }}
    >
      <WindowComponent
        id={id} 
        onClick={() => handlerOnClickWindowFocus(processDispatch, title)}
        style={{ 'width': isfullscreen ? '100%' : width + 'px', "height": isfullscreen ? '100%' : height + 'px' }}
        isloading={isloading}
        isfullscreen={isfullscreen}
        minimized={minimized}
        isfocus={processState.windowFocus === title}
      >
        <WindowHeader />
        <WindowContent>
          {children}
        </WindowContent>
      </WindowComponent>
    </Draggable>
  )
}