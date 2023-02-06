import { processReducer } from "@utils/processReducer"
import { createContext, useReducer } from "react"
import { ChildrenType } from "types/global"
import { ProcessStateTypes, ProcessTypes } from "types/lib/processTypes"

const processInitialState: ProcessStateTypes = {
  processes: {},
  zIndex: 1
}

export const ProcessContext = createContext<any>({ processState: processInitialState } as ProcessTypes)

export const ProcessProvider = ({ children }: ChildrenType): JSX.Element => {
  const [processState, processDispatch] = useReducer(processReducer, processInitialState)

  return (
    <ProcessContext.Provider value={{ processState, processDispatch }}>
      {children}
    </ProcessContext.Provider>
  )
}