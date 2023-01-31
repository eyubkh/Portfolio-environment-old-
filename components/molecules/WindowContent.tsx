import { Black100, White100 } from "@utils/tokens"
import styled from "styled-components"
import { ChildrenType } from "types/global"

const WindowContentComponent = styled.div`
  width: 100%;
  height: 100%;
  overflow: scroll;
  background-color: ${White100};
  border: 1px solid ${Black100};
  border-top: none;
`

export const WindowContent = ({ children }: ChildrenType): JSX.Element => {
  return (
    <WindowContentComponent>
      {children}
    </WindowContentComponent>
  )
}