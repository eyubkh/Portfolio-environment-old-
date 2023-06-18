import { ProcessContext } from "lib/processContext"
import { useContext } from "react"
import { ProcessTypes } from "types/lib/processTypes"

function useProcessContext(): ProcessTypes {
  return useContext(ProcessContext)
}

export default useProcessContext