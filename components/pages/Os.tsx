import styled from "styled-components"
import { ProgramManager } from "../organisms/ProgramManager"
import { ProcessContext, ProcessProvider } from "lib/processContext"
import { useContext } from "react"
import { IconProcesses } from "components/molecules/IconProcesses"
import { IconProcessesTypes } from "types/lib/processTypes"
import useProcessContext from "@utils/useProcessContext"

const OsComponent = styled.div<any>`
  height: 100vh;
`

export function Os() {
  const { state: processState } = useProcessContext()
  const { processes, iconProcesses } = processState
  return (
    <OsComponent>
      <div id="processes">
        {
          processes
            .filter((item: any) => {
              if (item) return item
            })
        }
      </div>
      <div id="icons">
        {
          iconProcesses
            .map((object: IconProcessesTypes | undefined, index: number) => {
              if (!object) return undefined
              const { id, title, icon } = object
              return <IconProcesses key={id + index} id={id} title={title} processPossition={index} icon={icon} />
            })
            .filter((item: any) => {
              if (item) return item
            })
        }
      </div>
    </OsComponent>
  )
}