import { processReducer } from "@utils/processReducer"
import { ProgramManager } from "components/organisms/ProgramManager"
import { Dispatch, createContext, useReducer } from "react"
import { ChildrenType } from "types/global"
import { ProcessActionOptions, ProcessStateProps } from "types/lib/processTypes"

const processInitialState: ProcessStateProps = {
  processes: {
    'Program Manager': {
      id: 0,
      component: <ProgramManager />,
      iconComponent: <h1>pragramManager</h1>,
      minimized: false
    }
  }
}

export const ProcessContext = createContext<any>({ state: processInitialState } as {
  state: ProcessStateProps,
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