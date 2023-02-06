import { ProcessContext } from "lib/processContext"
import { useContext } from "react"

function useProcessContext() {
  return useContext(ProcessContext)
}

export default useProcessContext