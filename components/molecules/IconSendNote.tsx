import { Icon } from "./Icon"
import { ProcessActionOptions } from "types/lib/processTypes"
import useProcessContext from "@utils/useProcessContext"
import Data, { sendNote } from "@utils/data"

export const IconSendNote = (): JSX.Element => {
  const { dispatch: processDispatch } = useProcessContext()
  const { title, component, icon } = Data[sendNote]

  const handlerOnClickIcon = (event: any) => {
    event.preventDefault()
    processDispatch({
      type: ProcessActionOptions.PROCESSES,
      payload: [title, component]
    })
  }

  return (
    <Icon
      handler={handlerOnClickIcon}
      icon={icon}
      title={title}
    />
  )
}