import { WindowContent } from "components/molecules/WindowContent"
import { WindowHeader } from "components/molecules/WindowHeader"
import { WindowSubHeader } from "components/molecules/WindowSubHeader"
import Draggable from "react-draggable"
import styled from "styled-components"
import { WindowContext } from "lib/windowContext"
import { useContext, useEffect } from "react"
import { WindowActionOptions } from "types/lib/windowTypes"
import { ProcessContext } from "lib/processContext"
import { ProcessActionOptions } from "types/lib/processTypes"

const WindowComponent = styled.div<any>`
  transform: translate(19px, 10px);
  width: ${props => props.isFullScreen ? '100%' : '500px'};
  height: ${props => props.isFullScreen ? '100vh' : '500px'};
  display: ${props => props.isOpen ? 'inline-block' : 'none'};
`

interface PropsType {
  children: JSX.Element[] | JSX.Element,
  title: string
}

export const Window = ({ title, children }: PropsType): JSX.Element => {
  const { state, dispatch } = useContext(WindowContext)
  const { dispatch: dispatchProcess } = useContext(ProcessContext)
  useEffect(() => {
    dispatch({
      type: WindowActionOptions.ID
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
        isOpen={state?.isOpen}
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