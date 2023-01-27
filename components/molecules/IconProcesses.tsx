import { IconProcessesTypes, ProcessActionOptions } from "types/lib/processTypes"
import { Icon } from "./Icon"
import { useContext } from "react"
import { ProcessContext } from "lib/processContext"

export const IconProcesses = ({ id, title, icon, processPossition }: IconProcessesTypes): JSX.Element => {
  const { dispatch: dispatchProcess } = useContext(ProcessContext)
  const handlerOnClick = (event: any) => {
    console.log(processPossition)
    event.preventDefault()
    const el = document.getElementById(id)
    if (el) {
      el.style.display = 'inherit'
    }

    if (dispatchProcess) {
      dispatchProcess({
        type: ProcessActionOptions.DELETE_ICON_PROCESS,
        payload: processPossition
      })
    }

  }

  return <Icon handler={handlerOnClick} src={icon}>{title}</Icon>
}