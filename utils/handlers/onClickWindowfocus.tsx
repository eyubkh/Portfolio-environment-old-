import { HandlerWindowfocus } from "types/global"
import { ProcessDispatchEnum } from "types/lib/processTypes"

export const handlerOnClickWindowFocus = ({ processDispatch, title }: HandlerWindowfocus) => {
  processDispatch({
    type: ProcessDispatchEnum.WINDOW_FOCUS,
    payload: title
  })
}