import data from "@utils/data"
import { ProcessDispatchEnum, ProcessTypes } from "types/lib/processTypes"

export const handlerOnClickIcon = (
  title: string,
  {
    processDispatch,
    processState
  }: ProcessTypes
) => {
  const { component } = data[title]
  if (processState.processes[title]) {
    processDispatch({
      type: ProcessDispatchEnum.MINIMIZED,
      payload: [title, false]
    })

  } else {
    processDispatch({
      type: ProcessDispatchEnum.PROCESSES,
      payload: [title, component]
    })
  }

}