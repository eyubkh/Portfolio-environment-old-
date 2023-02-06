import { type Dispatch, createContext } from "react"
import { useReducer } from "react"
import { ChildrenType } from "types/global"
import { WindowDispatchTypes, WindowStateTypes } from "types/lib/windowTypes"
import reducer from 'utils/windowReducer'

const width = 700
const height = 400

const windowInitialState: WindowStateTypes = {
  id: '',
  possition: {
    x: (window.innerWidth / 2) - (width / 2),
    y: (window.innerHeight / 2) - (height / 2)
  },
  lastPossition: undefined,
  isFullScreen: false,
  icon: '',
  title: '',
  height,
  width
}

export const WindowContext = createContext<any>({ windowState: windowInitialState } as {
  windowState: WindowStateTypes,
  windowDispatch: Dispatch<WindowDispatchTypes>
})

export const WindowProvider = ({ children }: ChildrenType): JSX.Element => {
  const [windowState, windowDispatch] = useReducer(reducer, windowInitialState)

  return (
    <WindowContext.Provider value={{ windowState, windowDispatch }}>
      {children}
    </WindowContext.Provider>
  )
}