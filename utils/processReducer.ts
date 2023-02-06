import { Reducer } from "react"
import {
  ProcessDispatchEnum,
  ProcessDispatchTypes,
  ProcessStateTypes
} from "types/lib/processTypes"
import { uuid as v4 } from "uuidv4"

export const processReducer: Reducer<ProcessStateTypes, ProcessDispatchTypes> = (state, action) => {
  const { type, payload } = action

  switch (type) {
    case ProcessDispatchEnum.INIT: {
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
    case ProcessDispatchEnum.PROCESSES: {
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
    case ProcessDispatchEnum.DELETE_PROCESSES: {
      delete state.processes[payload]
      return {
        ...state
      }
    }
    case ProcessDispatchEnum.MINIMIZED: {
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
    case ProcessDispatchEnum.Z_INDEX: {
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