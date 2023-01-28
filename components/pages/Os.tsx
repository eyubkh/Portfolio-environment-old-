import styled from "styled-components"
import useProcessContext from "@utils/useProcessContext"
import { IconProcesses } from "components/molecules/IconProcesses"

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
          Object.values(processes)
        }
      </div>
      <div id="icons">
        {
          Object
            .values(iconProcesses)
            .map(({ id, title, icon }: any) => {
              return <IconProcesses key={id} id={id} icon={icon} title={title} />
            })
        }
      </div>
    </OsComponent>
  )
}