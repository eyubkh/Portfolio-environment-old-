import { WindowContext } from "lib/windowContext"
import { useContext } from "react"
import { WindowTypes } from "types/lib/windowTypes"

function useWindowContext(): WindowTypes {
  return useContext(WindowContext)
}

export default useWindowContext