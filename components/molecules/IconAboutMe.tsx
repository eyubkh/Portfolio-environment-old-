import { Icon } from "./Icon"
import { ProcessActionOptions } from "types/lib/processTypes"
import useProcessContext from "@utils/useProcessContext"
import Data, { aboutMe } from "@utils/data"

export const IconAboutMe = (): JSX.Element => {
  const { state: processState, dispatch: processDispatch } = useProcessContext()
  const { title, component, icon } = Data[aboutMe]

  const handlerOnClickIcon = (event: any) => {
    event.preventDefault()
    if (processState.processes[title]) {
      processDispatch({
        type: ProcessActionOptions.MINIMIZED,
        payload: [title, false]
      })

    } else {
      processDispatch({
        type: ProcessActionOptions.PROCESSES,
        payload: [title, component]
      })
    }

  }

  return (
    <Icon
      title={title}
      icon={icon}
      handler={handlerOnClickIcon}
    />
  )
}