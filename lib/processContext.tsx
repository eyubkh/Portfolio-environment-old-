import { processReducer } from "@utils/processReducer"
import { Dispatch, createContext, useReducer } from "react"
import { ChildrenType } from "types/global"
import { ProcessActionOptions, ProcessStateTypes } from "types/lib/processTypes"

const processInitialState: ProcessStateTypes = {

}

export const ProcessContext = createContext<any>({ state: processInitialState } as {
  state: ProcessStateTypes,
  dispatch: Dispatch<ProcessActionOptions>
})

export const ProcessProvider = ({ children }: ChildrenType): JSX.Element => {
  const [state, dispatch] = useReducer(processReducer, processInitialState)

  return (
    <ProcessContext.Provider value={{ state, dispatch }}>
      {children}
    </ProcessContext.Provider>
  )
}