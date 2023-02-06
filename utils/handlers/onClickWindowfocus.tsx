import { HandlerWindowfocus } from "types/global"
import { ProcessDispatchEnum } from "types/lib/processTypes"

export const handlerOnClickWindowFocus = ({ id, processState, processDispatch }: HandlerWindowfocus) => {
  const el = document.getElementById(id)
  if (el) {
    el.style.zIndex = String(processState.zIndex)
    processDispatch({
      type: ProcessDispatchEnum.Z_INDEX
    })
  }
}