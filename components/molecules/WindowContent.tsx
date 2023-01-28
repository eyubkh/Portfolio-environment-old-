import { White100 } from "@utils/tokens"
import styled from "styled-components"
import { ChildrenType } from "types/global"

const WindowContentComponent = styled.div`
  padding-top: 52px;
  height: 100%;
  width: 100%;
  background-color: ${White100};
  overflow: hidden;
`

export const WindowContent = ({ children }: ChildrenType): JSX.Element => {
  return (
    <WindowContentComponent>
      {children}
    </WindowContentComponent>
  )
}