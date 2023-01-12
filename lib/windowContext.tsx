import { type Dispatch, createContext } from "react"
import { useReducer } from "react"
import { ActionOptions, WindowStateProps } from "types/context/windowTypes"
import reducer from 'utils/windowReducer'

type PropsType = {
  children: JSX.Element
}

const windowInitialState: WindowStateProps = {
  isFullScreen: false,
  isOpen: true,
  limited: false
}

export const WindowContext = createContext<any>({ state: windowInitialState } as {
  state: WindowStateProps,
  dispatch: Dispatch<ActionOptions>
})

export const WindowProvider = ({ children }: PropsType): JSX.Element => {
  const [state, dispatch] = useReducer(reducer, windowInitialState)

  return (
    <WindowContext.Provider value={{ state, dispatch }}>
      {children}
    </WindowContext.Provider>
  )
}