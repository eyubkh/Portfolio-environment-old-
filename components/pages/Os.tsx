import styled from "styled-components"
import useProcessContext from "@utils/useProcessContext"
import { IconProcesses } from "components/molecules/IconProcesses"
import { useEffect } from "react"

const OsComponent = styled.div<any>`
  height: 100vh;
  #icons {
    height: 100vh;
    display: flex;
  }
`

export function Os() {
  const { state: processState } = useProcessContext()
  const { processes, iconProcesses } = processState
  return (
    <OsComponent>
      <div id="processes">
        {Object.values(processes)}
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