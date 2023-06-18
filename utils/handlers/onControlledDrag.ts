import { WindowDispatchEnum, WindowDispatchTypes, WindowDispatcher } from "types/lib/windowTypes"

const handlerOnControlledDrag = (possition: { x: number, y: number}, windowDispatch: WindowDispatcher) => {
  const { x, y } = possition
  windowDispatch({
    type: WindowDispatchEnum.POSSITION,
    payload: { x, y }
  })
}

export default handlerOnControlledDrag