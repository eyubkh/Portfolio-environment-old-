import { type Dispatch, createContext } from "react"
import { useReducer } from "react"
import { ChildrenType } from "types/global"
import { ActionOptions, WindowStateProps } from "types/lib/windowTypes"
import reducer from 'utils/windowReducer'

const windowInitialState: WindowStateProps = {
  isFullScreen: false,
  isOpen: true,
  limited: false
}

export const WindowContext = createContext<any>({ state: windowInitialState } as {
  state: WindowStateProps,
  dispatch: Dispatch<ActionOptions>
})

export const WindowProvider = ({ children }: ChildrenType): JSX.Element => {
  const [state, dispatch] = useReducer(reducer, windowInitialState)

  return (
    <WindowContext.Provider value={{ state, dispatch }}>
      {children}
    </WindowContext.Provider>
  )
}