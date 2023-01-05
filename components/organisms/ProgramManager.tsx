import styled from 'styled-components'
import Draggable from 'react-draggable'
import { useRef } from 'react'
import { WindowHeader } from 'components/molecules/WindowHeader'
import { WindowSubHeader } from 'components/molecules/WindowSubHeader'
import { White100 } from '@utils/tokens'

const ProgramManagerComponent = styled.div`
  place-content: center;
  width: 400px;
  height:  400px;
  background-color: ${White100};
`

export const ProgramManager = () => {

  const nodeRef = useRef(null)

  const handlerDrag = (event: any) => {
    // console.log(event, 'draggggging')
  } 

  return (
        <Draggable
        handle='strong'
        // nodeRef={nodeRef}
          onDrag={handlerDrag}
        > 
          <ProgramManagerComponent>
            <WindowHeader />
            <WindowSubHeader />
          </ProgramManagerComponent>
        </Draggable> 
  )
}