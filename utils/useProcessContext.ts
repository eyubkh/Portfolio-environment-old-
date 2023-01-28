import { ProcessContext } from "lib/processContext"
import { useContext } from "react"

function useProcessContext() {
  const { dispatch, state } = useContext(ProcessContext)
  return {
    dispatch,
    state
  }
}

export default useProcessContext