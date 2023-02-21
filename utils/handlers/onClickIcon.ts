import data from "@utils/data"
import { ProcessDispatchEnum, ProcessTypes } from "types/lib/processTypes"

export const handlerOnClickIcon = (
  title: string,
  { processDispatch, processState }: ProcessTypes
) => {
  processDispatch({
    type: ProcessDispatchEnum.WINDOW_FOCUS,
    payload: title
  })
  
  if (processState.processes[title]) {
    processDispatch({
      type: ProcessDispatchEnum.MINIMIZED,
      payload: [title, false]
    })
  } else {
    const { component } = data[title]
    
    processDispatch({
      type: ProcessDispatchEnum.PROCESSES,
      payload: [title, component]
    })
  }

}