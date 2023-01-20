import styled from "styled-components"
import { ProgramManager } from "../organisms/ProgramManager"
import { ProcessContext, ProcessProvider } from "lib/processContext"
import { useContext } from "react"
import { IconProcesses } from "components/molecules/IconProcesses"

const OsComponent = styled.div<any>`
  height: 100vh;
`

export function Os() {
  const { state } = useContext(ProcessContext)
  console.log(state)
  return (
    <OsComponent>
      <ProgramManager />
      {
        state?.processes.map(() => {
          return <IconProcesses />
        })
      }
    </OsComponent>
  )
}