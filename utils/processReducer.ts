import { Reducer } from "react"
import {
  ProcessActionOptions,
  ProcessActionProps,
  ProcessStateProps
} from "types/lib/processTypes"
import { uuid as v4 } from "uuidv4"

export const processReducer: Reducer<ProcessStateProps, ProcessActionProps> = (state, action) => {
  const { type, payload } = action

  switch (type) {
    case ProcessActionOptions.INIT: {
      const key = payload.title
      return {
        ...state,
        processes: {
          ...state.processes,
          [key]: {
            ...state.processes[key],
            icon: payload
          }
        }
      }
    }
    case ProcessActionOptions.PROCESSES: {
      const key = payload[0]
      const id = v4()
      return {
        ...state,
        processes: {
          ...state.processes,
          [key]: {
            ...state.processes[key],
            id,
            minimized: false,
            component: payload[1](id)
          }
        }
      }
    }
    case ProcessActionOptions.DELETE_PROCESSES: {
      delete state.processes[payload]
      return {
        ...state
      }
    }
    case ProcessActionOptions.MINIMIZED: {
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
    case ProcessActionOptions.Z_INDEX: {
      return {
        ...state,
        zIndex: 1 + state.zIndex
      }
    }
    default: {
      return state
    }
  }
}