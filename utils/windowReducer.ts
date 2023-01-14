import { Reducer } from 'react'
import { WindowStateProps, WindowActionProps, WindowActionOptions } from 'types/lib/windowTypes'

const windowReducer: Reducer<WindowStateProps, WindowActionProps> = (state, action) => {
  const { type, payload } = action
  const { FULLSCREEN, OPEN, ID, POSSITION } = WindowActionOptions
  switch (type) {
    case FULLSCREEN: {
      return {
        ...state,
        isFullScreen: !state.isFullScreen,
        possition: !state.isFullScreen ? { x: 0, y: 0 } : state.lastPossition
      }
    }
    case OPEN: {
      return {
        ...state,
        isOpen: !state.isOpen
      }
    }
    case ID: {
      return {
        ...state,
        id: '123456' + Math.round(Math.random() * 10)
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