import { IconProcessesTypes, ProcessActionOptions } from "types/lib/processTypes"
import { Icon } from "./Icon"
import useProcessContext from "@utils/useProcessContext"

export const IconProcesses = ({ id, title, icon, processPossition }: IconProcessesTypes): JSX.Element => {
  const { dispatch: processDispatch } = useProcessContext()
  const handlerOnClick = (event: any) => {
    event.preventDefault()

    const el = document.getElementById(id)
    if (el) {
      el.style.display = 'inherit'
    }
    processDispatch({
      type: ProcessActionOptions.DELETE_ICON_PROCESS,
      payload: processPossition
    })
  }

  return <Icon handler={handlerOnClick} src={icon}>{title}</Icon>
}