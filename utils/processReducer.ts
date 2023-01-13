import { Reducer } from "react"
import { ProcessActionProps, ProcessStateTypes } from "types/lib/processTypes"

export const processReducer: Reducer<ProcessStateTypes, ProcessActionProps> = (state, action) => {
  const { type, payload } = action
  switch (type) {
    default: {
      return state
    }
  }
}