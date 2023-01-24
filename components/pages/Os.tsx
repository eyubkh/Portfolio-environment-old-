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
  console.log(state.processes)
  return (
    <OsComponent>
      <div id="processes">
        {
          state?.processes
        }
      </div>
      <div id="icons">
        {/* {
          state?.processes.map((id: string) => {
            return <IconProcesses key={id} />
          })
        } */}
      </div>
    </OsComponent>
  )
}