import { WindowContent } from "components/molecules/WindowContent"
import { WindowHeader } from "components/molecules/WindowHeader"
import { WindowSubHeader } from "components/molecules/WindowSubHeader"
import Draggable from "react-draggable"
import styled from "styled-components"
import { WindowContext } from "lib/windowContext"
import { useContext } from "react"

const WindowComponent = styled.div<any>`
  width: ${props => props.isFullScreen ? '100vw' : '500px'};
  height: ${props => props.isFullScreen ? '100vh' : '500px'};
  display: ${props => props.isOpen ? 'inline-block' : 'none'};
`

interface PropsType {
  children: JSX.Element[] | JSX.Element,
  title: string,
}

export const Window = ({ title, children }: PropsType): JSX.Element => {
  const { state } = useContext(WindowContext)
  return (
    <Draggable handle="strong">
      <WindowComponent
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