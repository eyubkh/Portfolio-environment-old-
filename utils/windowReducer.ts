import { Reducer } from 'react'
import { WindowStateProps, WindowActionProps, WindowActionOptions } from 'types/lib/windowTypes'

const windowReducer: Reducer<WindowStateProps, WindowActionProps> = (state, action) => {
  const { type, payload } = action
  const { FULLSCREEN, ICON, TITLE, ID, POSSITION } = WindowActionOptions
  switch (type) {
    case FULLSCREEN: {
      return {
        ...state,
        isFullScreen: !state.isFullScreen,
        possition: !state.isFullScreen ? { x: 0, y: 0 } : state.lastPossition
      }
    }
    case ID: {
      return {
        ...state,
        id: '123456' + Math.round(Math.random() * 10)
      }
    }
    case TITLE: {
      return {
        ...state,
        title: payload
      }
    }
    case ICON: {
      return {
        ...state,
        icon: payload
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