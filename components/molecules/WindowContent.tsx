import { Black100, White100 } from "@utils/tokens"
import styled from "styled-components"
import { ChildrenType } from "types/global"

const WindowContentComponent = styled.div<any>`
  background-color: ${White100};
  border: 1px solid ${Black100};
  border-top: none;
  width: auto;
  height: 100%;

  overflow: scroll;
`

export const WindowContent = ({ children }: ChildrenType): JSX.Element => {
  return (
    <WindowContentComponent >
      {children}
    </WindowContentComponent>
  )
}