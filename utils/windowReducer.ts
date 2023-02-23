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
      let { id, title, height, width } = payload
      width = width ? width : state.width
      height = height ? height : state.height

      return {
        ...state,
        id,
        title,
        isLoading: false,
        height,
        width,
        possition: {
          x: (window.innerWidth / 2) - (width / 2) + Math.random() * 50 - 25,
          y:(window.innerHeight / 2) - (height / 2) + Math.random() * 50 - 25
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