import { WindowContext } from "lib/windowContext"
import { useContext } from "react"

function useWindowContext() {
  const { dispatch, state } = useContext(WindowContext)
  return {
    dispatch,
    state
  }
}

export default useWindowContext