import { Black100, Grey100, Grey200, White100 } from "@utils/tokens"
import useProcessContext from "@utils/useProcessContext"
import useWindowContext from "@utils/useWindowContext"
import styled from "styled-components"
import { ProcessActionOptions } from "types/lib/processTypes"

const WindowCloseComponent = styled.div`
  position: relative;
  height: 18px;
  width: 18px;
  border-right: solid 1px ${Black100};
  background-color: ${Grey200};
  cursor: pointer;
  display: block;

  :after {
    content: '';
    position: absolute;
    height: 1px;
    width: 11px;
    background-color: ${White100};
    top: 50%; 
    left: 50%;
    transform: translateY(-50%) translateX(-50%);
    border: solid 1px black;
    box-shadow: 1px 1px ${Grey100};
  }
  
`

export const WindowClose = () => {
  const { state: windowState } = useWindowContext()
  const { dispatch: processDispatch } = useProcessContext()
  const handlerOnClickClose = (event: any) => {
    event.preventDefault()

    processDispatch({
      type: ProcessActionOptions.DELETE_PROCESSES,
      payload: windowState.title
    })
  }

  return <WindowCloseComponent onClick={handlerOnClickClose} />

}