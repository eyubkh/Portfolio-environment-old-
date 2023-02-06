import { WindowDispatchEnum } from "types/lib/windowTypes"

const handlerOnControlledDrag = (event: any, possition: any, dispatch: any) => {
  event.preventDefault()

  const { x, y } = possition
  dispatch({
    type: WindowDispatchEnum.POSSITION,
    payload: { x, y }
  })
}

export default handlerOnControlledDrag