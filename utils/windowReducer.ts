import { Reducer } from 'react'
import {
  WindowStateProps,
  WindowActionProps,
  WindowActionOptions
} from 'types/lib/windowTypes'

const windowReducer: Reducer<WindowStateProps, WindowActionProps> = (state, action) => {
  const { type, payload } = action
  const { FULLSCREEN, INIT, POSSITION } = WindowActionOptions
  switch (type) {
    case INIT: {
      const { id, title } = payload
      return {
        ...state,
        id,
        title
      }
    }
    case FULLSCREEN: {
      return {
        ...state,
        isFullScreen: !state.isFullScreen,
        possition: !state.isFullScreen ? { x: 0, y: 0 } : state.lastPossition
      }
    }
    case POSSITION: {
      return {
        ...state,
        lastPossition: payload,
        possition: payload
      }
    }
    default: {
      return state
    }
  }
}

export default windowReducer