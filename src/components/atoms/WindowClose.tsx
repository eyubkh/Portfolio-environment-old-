import { handlerOnClickWindowClose } from '@utils/handlers/onClickWindowClose'
import { Black100, Grey100, Grey200, White100 } from '@utils/tokens'
import useProcessContext from '@utils/hooks/useProcessContext'
import useWindowContext from '@utils/hooks/useWindowContext'
import styled from 'styled-components'

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
  const { windowState } = useWindowContext()
  const { processDispatch } = useProcessContext()

  return (
    <WindowCloseComponent
      onClick={() => handlerOnClickWindowClose(processDispatch, windowState)}
    />
  )
}
