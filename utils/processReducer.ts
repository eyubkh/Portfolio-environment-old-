import { Reducer } from "react"
import {
  ProcessActionOptions as Options,
  ProcessActionProps,
  ProcessStateProps
} from "types/lib/processTypes"

export const processReducer: Reducer<ProcessStateProps, ProcessActionProps> = (state, action) => {
  const { type, payload } = action

  switch (type) {
    case Options.PROCESSES: {
      const key = Object.keys(payload)[0]
      return {
        ...state,
        processes: {
          ...state.processes,
          [key]: {
            ...payload[key],
            id: '1234',
            minimized: false
          }
        }
      }
    }
    case Options.DELETE_PROCESSES: {
      delete state.processes[payload]
      return {
        ...state
      }
    }
    case Options.MINIMIZED: {
      return {
        ...state,
        processes: {
          ...state.processes,
          [payload[0]]: {
            ...state.processes[payload[0]],
            minimized: payload[1]
          }
        }
      }
    }
    default: {
      return state
    }
  }
}