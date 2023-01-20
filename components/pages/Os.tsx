import styled from "styled-components"
import { ProgramManager } from "../organisms/ProgramManager"
import { ProcessProvider } from "lib/processContext"

const OsComponent = styled.div<any>`
  height: 100vh;
`

export function Os() {
  return (
    <ProcessProvider>
      <OsComponent>
        <ProgramManager />
      </OsComponent>
    </ProcessProvider>
  )
}