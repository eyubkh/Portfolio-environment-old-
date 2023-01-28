import { Reducer } from "react"
import {
  ProcessActionOptions as Options,
  ProcessActionProps,
  ProcessStateTypes
} from "types/lib/processTypes"

export const processReducer: Reducer<ProcessStateTypes, ProcessActionProps> = (state, action) => {
  const { type, payload } = action

  switch (type) {
    case Options.PROCESSES: {
      return {
        ...state,
        processes: Object.assign(state.processes, payload)
      }
    }
    case Options.DELETE_PROCESSES: {
      delete state.processes[payload]
      return {
        ...state
      }
    }
    case Options.ICON_PROCESSES: {
      return {
        ...state,
        iconProcesses: Object.assign(state.iconProcesses, payload)
      }
    }
    case Options.DELETE_ICON_PROCESS: {
      delete state.iconProcesses[payload]
      return {
        ...state
      }
    }
    default: {
      return state
    }
  }
}