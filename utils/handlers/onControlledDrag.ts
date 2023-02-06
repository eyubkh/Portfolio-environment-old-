import { WindowDispatchEnum } from "types/lib/windowTypes"

const handlerOnControlledDrag = (possition: any, dispatch: any) => {
  const { x, y } = possition
  dispatch({
    type: WindowDispatchEnum.POSSITION,
    payload: { x, y }
  })
}

export default handlerOnControlledDrag