import { Reducer } from 'react'
import {
  WindowStateTypes,
  WindowDispatchTypes,
  WindowDispatchEnum
} from 'types/lib/windowTypes'

const windowReducer: Reducer<WindowStateTypes, WindowDispatchTypes> = (state, action) => {
  const { type, payload } = action

  switch (type) {
    case WindowDispatchEnum.INIT: {
      const { id, title } = payload
      return {
        ...state,
        id,
        title,
        possition: {
          x: (window.innerWidth / 2) - (state.width / 2) + Math.random() * 30 ,
          y:(window.innerHeight / 2) - (state.height / 2) + Math.random() * 30 
        }
      }
    }
    case WindowDispatchEnum.FULLSCREEN: {
      return {
        ...state,
        isFullScreen: !state.isFullScreen,
        possition: !state.isFullScreen ? { x: 0, y: 0 } : state.lastPossition
      }
    }
    case WindowDispatchEnum.POSSITION: {
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