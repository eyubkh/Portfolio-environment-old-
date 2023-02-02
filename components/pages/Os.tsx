import styled from "styled-components"
import useProcessContext from "@utils/useProcessContext"

const OsComponent = styled.div<any>`
position: relative;
  height: 100vh;
  #icons {
    height: 100vh;
    display: flex;
  }
`

export function Os() {
  const { state: processState } = useProcessContext()
  const { processes } = processState
  return (
    <OsComponent>
      <div id="processes">
        {
          Object
            .values(processes)
            .map(({ component }: any): JSX.Element => component)
        }
      </div>
      <div id="icons">
        {
          Object
            .values(processes)
            .filter((process: any): any => process.minimized)
            .map(({ iconComponent }: any): any => iconComponent)
        }
      </div>
    </OsComponent>
  )
}