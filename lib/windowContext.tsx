import { type Dispatch, createContext } from "react"
import { useReducer } from "react"
import { ChildrenType } from "types/global"
import { WindowActionOptions, WindowStateProps } from "types/lib/windowTypes"
import reducer from 'utils/windowReducer'

const windowInitialState: WindowStateProps = {
  id: '',
  possition: { x: 0, y: 0 },
  lastPossition: undefined,
  isFullScreen: false,
  icon: '',
  title: '',
  height: 300,
  width: 500,
  processPossition: 0
}

export const WindowContext = createContext<any>({ state: windowInitialState } as {
  state: WindowStateProps,
  dispatch: Dispatch<WindowActionOptions>
})

export const WindowProvider = ({ children }: ChildrenType): JSX.Element => {
  const [state, dispatch] = useReducer(reducer, windowInitialState)

  return (
    <WindowContext.Provider value={{ state, dispatch }}>
      {children}
    </WindowContext.Provider>
  )
}