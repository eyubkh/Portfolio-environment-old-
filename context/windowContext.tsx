import { create } from "domain"
import { Reducer, type Dispatch, createContext } from "react"
import { useReducer } from "react"

type ActionProps = { type: ActionOptions, payload?: boolean }

export enum ActionOptions {
  FULLSCREEN,
  OPEN,
  LIMITED
}

type StateProps = {
  isFullScreen: boolean,
  isOpen: boolean,
  limited: boolean,
}

type PropsType = {
  children: JSX.Element
}

const initialState: StateProps = {
  isFullScreen: false,
  isOpen: true,
  limited: false
}

export const Context = createContext<any>({ state: initialState } as {
  state: StateProps,
  dispatch: Dispatch<ActionOptions>
})

// export const WindowContext = createContext<StateProps | null>(initialState)
// export const WindowDispatchContext = createContext<Dispatch<ActionProps> | null>(null)

const reducer: Reducer<StateProps, ActionProps> = (state, action) => {
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

export const WindowProvider = ({ children }: PropsType): JSX.Element => {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <Context.Provider value={{ state, dispatch }}>
      {children}
    </Context.Provider>
  )
}