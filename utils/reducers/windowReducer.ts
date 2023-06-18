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
      let { height, width} = payload

      const possition = {
        x: ((document.body.clientWidth / 2) - (width / 2)) + Math.random() * 50 - 25,
        y: ((document.body.clientHeight / 2) - (height / 2)) + Math.random() * 50 - 25
      }

      return {
        ...state,
        ...payload,
        isloading: false,
        height,
        width,
        possition: payload.isfullscreen ? { x: 0, y: 0 } : possition,
        lastPossition: possition
      }
    }
    case WindowDispatchEnum.FULLSCREEN: {
      return {
        ...state,
        isfullscreen: !state.isfullscreen,
        possition: !state.isfullscreen ? { x: 0, y: 0 } : state.lastPossition
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