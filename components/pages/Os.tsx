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
  return (
    <OsComponent>
      <div id="processes">
        {
          state?.processes
        }
      </div>
      <div id="icons">
        {
          state?.iconProcesses.map(({ id, title, icon }: { id: string, title: string, icon: string }, index: number) => {
            return <IconProcesses key={index} id={id} title={title} icon={icon} />
          })
        }
      </div>
    </OsComponent>
  )
}