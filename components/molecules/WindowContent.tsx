import { White100 } from "@utils/tokens"
import styled from "styled-components"

const WindowContentComponent = styled.div`
  padding-top: 52px;
  height: 100%;
  width: 100%;
  background-color: ${White100};
  overflow: hidden;
`

interface PropsType {
  children: JSX.Element[] | JSX.Element
}

export const WindowContent = ({ children }: PropsType): JSX.Element => {
  return (
    <WindowContentComponent>
      {children}
    </WindowContentComponent>
  )
}