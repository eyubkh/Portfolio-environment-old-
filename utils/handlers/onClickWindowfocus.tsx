import { ProcessDispatchEnum, ProcessDispatcher } from 'types/lib/processTypes'

export const handlerOnClickWindowFocus = (
  processDispatch: ProcessDispatcher,
  title: string
) => {
  processDispatch({
    type: ProcessDispatchEnum.WINDOW_FOCUS,
    payload: title,
  })
}
