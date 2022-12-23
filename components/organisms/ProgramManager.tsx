import styled from 'styled-components'
import Draggable from 'react-draggable'
import { useRef } from 'react'
import { WindowClose } from '../atoms/WindowClose'
import { WindowMinimize } from '../atoms/WindowMinimize'
import { WindowMaximize } from '../atoms/WindowMaximize'

const ProgramManagerComponent = styled.div`
  display: grid;
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
    nodeRef={nodeRef}
      onDrag={handlerDrag}
    >
      <ProgramManagerComponent>
        <WindowMaximize />
        <h1 ref={nodeRef}>move me!</h1>
      </ProgramManagerComponent>
    </Draggable>
  )
}