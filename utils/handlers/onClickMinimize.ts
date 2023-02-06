import { Dispatch } from "react"
import { ProcessDispatchEnum, ProcessDispatchTypes } from "types/lib/processTypes"
import { WindowStateTypes } from "types/lib/windowTypes"

export const handlerOnClickMinimize = (
  processDispatch: Dispatch<ProcessDispatchTypes>,
  windowState: WindowStateTypes
) => {
  processDispatch({
    type: ProcessDispatchEnum.MINIMIZED,
    payload: [windowState.title, true]
  })
}