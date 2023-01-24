import { Reducer } from "react"
import { ProcessActionOptions, ProcessActionProps, ProcessStateTypes } from "types/lib/processTypes"

export const processReducer: Reducer<ProcessStateTypes, ProcessActionProps> = (state, action) => {
  const { type, payload } = action
  const { PROCESSES } = ProcessActionOptions
  switch (type) {
    case PROCESSES: {
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