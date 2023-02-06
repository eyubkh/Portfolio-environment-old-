import { Dispatch } from "react"
import { ProcessDispatchEnum, ProcessDispatchTypes } from "types/lib/processTypes"
import { WindowStateTypes } from "types/lib/windowTypes"

export function handlerOnClickWindowClose(
  processDispatch: Dispatch<ProcessDispatchTypes>,
  windowState: WindowStateTypes
) {
  processDispatch({
    type: ProcessDispatchEnum.DELETE_PROCESSES,
    payload: windowState.title
  })
}