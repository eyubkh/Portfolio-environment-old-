import { type Dispatch, createContext } from "react"
import { useReducer } from "react"
import { ChildrenType } from "types/global"
import { WindowDispatchTypes, WindowStateTypes } from "types/lib/windowTypes"
import reducer from 'utils/windowReducer'

const windowInitialState: WindowStateTypes = {
  id: '',
  possition: { x: 0, y: 0 },
  lastPossition: undefined,
  isFullScreen: false,
  icon: '',
  title: '',
  height: 400,
  width: 700,
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