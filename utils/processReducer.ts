import { Reducer } from "react"
import { ProcessActionOptions, ProcessActionProps, ProcessStateTypes } from "types/lib/processTypes"

export const processReducer: Reducer<ProcessStateTypes, ProcessActionProps> = (state, action) => {
  const { type, payload } = action
  const { PROCESS } = ProcessActionOptions
  switch (type) {
    case PROCESS: {
      return {
        ...state,
        processes: [...state.processes, payload]
      }
    }
    default: {
      return state
    }
  }
}