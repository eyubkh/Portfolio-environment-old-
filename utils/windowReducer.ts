import { Reducer } from 'react'
import { WindowStateProps, ActionProps, ActionOptions } from 'types/lib/windowTypes'

const windowReducer: Reducer<WindowStateProps, ActionProps> = (state, action) => {
  const { type, payload } = action
  switch (type) {
    case ActionOptions.FULLSCREEN: {
      return {
        ...state,
        isFullScreen: !state.isFullScreen
      }
    }
    case ActionOptions.OPEN: {
      return {
        ...state,
        isOpen: !state.isOpen
      }
    }
    default: {
      return state
    }
  }
}

export default windowReducer