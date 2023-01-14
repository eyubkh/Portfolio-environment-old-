import styled from "styled-components"
import { ProgramManager } from "../organisms/ProgramManager"

const OsComponent = styled.div<any>`
  height: 100vh;
`

export function Os() {
  return (
    <OsComponent>
      <ProgramManager />
    </OsComponent>
  )
}