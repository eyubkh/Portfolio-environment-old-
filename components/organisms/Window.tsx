import { WindowContent } from "components/molecules/WindowContent"
import { WindowHeader } from "components/molecules/WindowHeader"
import { WindowSubHeader } from "components/molecules/WindowSubHeader"
import Draggable from "react-draggable"
import styled from "styled-components"
import { Context, WindowProvider } from "context/windowContext"
import { useContext } from "react"

const WindowComponent = styled.div<any>`
  width: 500px;
  height: 300px;
  display: ${props => props.isOpen ? 'grid' : 'none'};
`

interface PropsType {
  children: JSX.Element,
  title: string,
}

export const Window = ({ title, children }: PropsType): JSX.Element => {
  const { state } = useContext(Context)
  console.log('window', state)
  return (
    <Draggable handle="strong">
      <WindowComponent isOpen={state?.isOpen}>
        <WindowHeader title={title} />
        <WindowSubHeader />
        <WindowContent>
          {children}
        </WindowContent>
      </WindowComponent>
    </Draggable>
  )
}