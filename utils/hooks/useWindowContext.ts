import { WindowContext } from "lib/windowContext"
import { useContext } from "react"

function useWindowContext() {
  return useContext(WindowContext)
}

export default useWindowContext