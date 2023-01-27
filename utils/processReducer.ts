import { Reducer } from "react"
import { ProcessActionOptions, ProcessActionProps, ProcessStateTypes } from "types/lib/processTypes"

export const processReducer: Reducer<ProcessStateTypes, ProcessActionProps> = (state, action) => {
  const { type, payload } = action

  const {
    PROCESSES,
    ICON_PROCESSES,
    DELETE_ICON_PROCESS,
    DELETE_PROCESSES
  } = ProcessActionOptions

  switch (type) {
    case PROCESSES: {
      return {
        ...state,
        processes: [...state.processes, payload]
      }
    }
    case DELETE_PROCESSES: {
      state.processes[payload] = undefined
      return {
        ...state,
        processes: [...state.processes]
      }
    }
    case ICON_PROCESSES: {
      return {
        ...state,
        iconProcesses: [...state.iconProcesses, payload]
      }
    }
    case DELETE_ICON_PROCESS: {
      state.iconProcesses[payload] = undefined
      return {
        ...state,
        iconProcesses: [...state.iconProcesses]
      }
    }
    default: {
      return state
    }
  }
}