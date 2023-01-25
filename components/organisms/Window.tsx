import { WindowContent } from "components/molecules/WindowContent"
import { WindowHeader } from "components/molecules/WindowHeader"
import { WindowSubHeader } from "components/molecules/WindowSubHeader"
import Draggable from "react-draggable"
import styled from "styled-components"
import { WindowContext } from "lib/windowContext"
import { useContext, useEffect } from "react"
import { WindowActionOptions } from "types/lib/windowTypes"

const WindowComponent = styled.div<any>`
  position: absolute;
  width: ${props => props.isFullScreen ? '100%' : '500px'};
  height: ${props => props.isFullScreen ? '100vh' : '500px'};
`

interface PropsType {
  children: JSX.Element[] | JSX.Element,
  title: string,
  icon: string
}

export const Window = ({ title, icon, children }: PropsType): JSX.Element => {
  const { state, dispatch } = useContext(WindowContext)
  useEffect(() => {
    dispatch({
      type: WindowActionOptions.ID
    })
    dispatch({
      type: WindowActionOptions.ICON,
      payload: icon
    })
    dispatch({
      type: WindowActionOptions.TITLE,
      payload: title
    })
  }, [])


  const handlerOnControlledDrag = (event: any, possition: any) => {
    const { x, y } = possition
    dispatch({
      type: WindowActionOptions.POSSITION,
      payload: { x, y }
    })
  }

  return (
    <Draggable
      disabled={state?.isFullScreen}
      handle="strong"
      position={state?.possition}
      onDrag={handlerOnControlledDrag}
    >
      <WindowComponent
        id={state?.id}
        key={state?.id}
        isFullScreen={state?.isFullScreen}
      >
        <WindowHeader title={title} />
        <WindowSubHeader />
        <WindowContent>
          {children}
        </WindowContent>
      </WindowComponent>
    </Draggable>
  )
}