import styled from "styled-components"
import useProcessContext from "@utils/hooks/useProcessContext"
import { Icon } from "components/molecules/Icon"
import { useEffect } from "react"
import { ProcessDispatchEnum } from "types/lib/processTypes"
import data, { programManager } from "@utils/data"

const OsComponent = styled.div<any>`
  position: relative;
  height: 100vh;
  width: 100vw;

  display: flex;
  align-items: start;
`

export function Os() {
  const { processState, processDispatch } = useProcessContext()
  const { processes } = processState
  
  const { title, component } = data[programManager]
  
  useEffect(() => {
    processDispatch({
      type: ProcessDispatchEnum.PROCESSES,
      payload: [title, component]
    })
  }, [])

  if(processState.processes[title] === undefined) {
    return <h1>Bye</h1>
  }
  return (
    <OsComponent>
      {
        Object
          .values(processes)
          .filter((process: any): any => process.minimized)
          .map(({ icon }: any): any => <Icon key={icon.title} icon={icon.icon} title={icon.title} />)
      }
      {
        Object
          .values(processes)
          .map(({ component }: any): JSX.Element => component)
      }
    </OsComponent>
  )
}