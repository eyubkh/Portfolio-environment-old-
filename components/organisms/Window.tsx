import styled from "styled-components"
import Draggable from "react-draggable"
import { WindowContent } from "components/molecules/WindowContent"
import { WindowHeader } from "components/molecules/WindowHeader"
import { WindowSubHeader } from "components/molecules/WindowSubHeader"
import { useEffect } from "react"
import { WindowDispatchEnum } from "types/lib/windowTypes"
import { WindowTypes } from "types/global"
import useWindowContext from "@utils/hooks/useWindowContext"
import handlerOnControlledDrag from "@utils/handlers/onControlledDrag"
import useProcessContext from "@utils/hooks/useProcessContext"
import { ProcessDispatchEnum } from "types/lib/processTypes"
import { handlerOnClickWindowFocus } from "@utils/handlers/onClickWindowfocus"
import { Grey100 } from "@utils/tokens"

const WindowComponent = styled.div<any>`
  position: absolute;
  display: flex;
  flex-direction: column;
  border: 1px solid ${Grey100};
  width: ${({ isFullScreen, width }) => isFullScreen ? '100%' : width + 'px'};
  height: ${({ isFullScreen, height }) => isFullScreen ? '100vh' : height + 'px'};
  display: ${({ minimized }) => minimized ? 'none' : 'inherit'};
  z-index: ${({ zIndex }) => zIndex + 1};
`

export const Window = ({ title, icon, children }: WindowTypes): JSX.Element => {
  const { windowState, windowDispatch } = useWindowContext()
  const { isFullScreen, height, width, possition } = windowState

  const { processState, processDispatch } = useProcessContext()
  const { minimized, id } = processState.processes[title]

  useEffect(() => {
    windowDispatch({
      type: WindowDispatchEnum.INIT,
      payload: { title, id }
    })
    processDispatch({
      type: ProcessDispatchEnum.INIT,
      payload: { icon, title }
    })
  }, [])

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
      onDrag={(event: any, position: any) => handlerOnControlledDrag(position, windowDispatch)}
    >
      <WindowComponent
        key={id}
        id={id}
        onClick={() => handlerOnClickWindowFocus({ id, processState, processDispatch })}
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