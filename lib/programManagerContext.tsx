import { processReducer } from "@utils/processReducer"
import { IconAboutMe } from "components/molecules/IconAboutMe"
import { IconProjects } from "components/molecules/IconProjects"
import { IconSendNote } from "components/molecules/IconSendNote"
import { Dispatch, createContext, useReducer } from "react"
import { ChildrenType } from "types/global"
import { ProcessActionOptions } from "types/lib/processTypes"
import { ProgramManagerStateTypes } from "types/lib/programManagerTypes"

const programManagerInitialState: ProgramManagerStateTypes = {
  processes: {},
  iconProcesses: [<IconAboutMe />, <IconProjects />, <IconSendNote />]
}

export const ProcessContext = createContext<any>({ state: programManagerInitialState } as {
  state: ProgramManagerStateTypes,
  dispatch: Dispatch<ProcessActionOptions>
})

export const ProcessProvider = ({ children }: ChildrenType): JSX.Element => {
  const [state, dispatch] = useReducer(processReducer, programManagerInitialState)

  return (
    <ProcessContext.Provider value={{ state, dispatch }}>
      {children}
    </ProcessContext.Provider>
  )
}