import { Dispatch } from 'react'
import { WindowDispatchEnum, WindowDispatchTypes } from 'types/lib/windowTypes'

export const handlerOnClickWindowMaximize = (
  windowDispatch: Dispatch<WindowDispatchTypes>
) => {
  windowDispatch({
    type: WindowDispatchEnum.FULLSCREEN,
  })
}
