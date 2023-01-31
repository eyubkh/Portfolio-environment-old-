import { Icon } from "./Icon"
import { ProcessActionOptions } from "types/lib/processTypes"
import useProcessContext from "@utils/useProcessContext"
import { sendNote } from "@utils/data"

export const IconSendNote = (): JSX.Element => {
  const { dispatch: processDispatch } = useProcessContext()

  const handlerOnClickIcon = (event: any) => {
    event.preventDefault()
    processDispatch({
      type: ProcessActionOptions.PROCESSES,
      payload: {
        [sendNote.title]: sendNote.component
      }
    })
  }

  return (
    <Icon
      handler={handlerOnClickIcon}
      src={sendNote.icon}
    >
      {sendNote.title}
    </Icon>
  )
}