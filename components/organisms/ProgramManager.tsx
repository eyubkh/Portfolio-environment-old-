import styled from 'styled-components'
import Draggable from 'react-draggable'
import { useRef } from 'react'
import { WindowHeader } from 'components/molecules/WindowHeader'

const ProgramManagerComponent = styled.div`
  place-content: center;
  width: 400px;
  height:  400px;
  background-color: red;
`

export const ProgramManager = () => {

  const nodeRef = useRef(null)

  const handlerDrag = (event: any) => {
    // console.log(event, 'draggggging')
  } 

  return (
    <Draggable
    // nodeRef={nodeRef}
      onDrag={handlerDrag}
    >
      <ProgramManagerComponent>
        <WindowHeader />
      </ProgramManagerComponent>
    </Draggable>
  )
}