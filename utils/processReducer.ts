import { Reducer } from "react"
import {
  ProcessDispatchEnum,
  ProcessDispatchTypes,
  ProcessStateTypes
} from "types/lib/processTypes"
import { uuid as uuid_v4 } from "uuidv4"

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
      const id = uuid_v4()

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
      const title = payload[0]
      const isMinimized = payload[1]

      return {
        ...state,
        processes: {
          ...state.processes,
          [title]: {
            ...state.processes[title],
            minimized: isMinimized
          }
        }
      }
    }
    case ProcessDispatchEnum.WINDOW_FOCUS: {
      return {
        ...state,
        windowFocus: payload
      }
    }
    default: {
      return state
    }
  }
}