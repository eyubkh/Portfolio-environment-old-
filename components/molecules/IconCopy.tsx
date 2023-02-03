import styled from "styled-components"
import Draggable from "react-draggable"
import Image from "next/image"
import { useState } from "react"
import { IconTypes } from "types/global"
import useProcessContext from "@utils/useProcessContext"
import { ProcessActionOptions } from "types/lib/processTypes"
import Data, { aboutMe } from '@utils/data'
import { AboutMe } from "components/organisms/AboutMe"

const IconComponent = styled.div<any>`
  display: inline-block;
  text-align: center;
  padding: 12px;
  filter: ${props => props.onDrag() ? 'grayscale(100%)' : 'none'};
  p {
    opacity: ${props => props.onDrag() ? 0 : 1};
  }
`

export const IconCopy = ({ icon, title }: IconTypes): JSX.Element => {
  const [onDrag, setOnDrag] = useState(false)
  const { state: processState, dispatch: processDispatch } = useProcessContext()
  const { component } = Data[title]
  const handlerOnClickIcon = (event: any) => {
    event.preventDefault()
    if (processState.processes[title]) {
      processDispatch({
        type: ProcessActionOptions.MINIMIZED,
        payload: [title, false]
      })

    } else {
      processDispatch({
        type: ProcessActionOptions.PROCESSES,
        payload: [title, component]
      })
    }

  }

  return (
    <Draggable
      onStart={() => setOnDrag(true)}
      onStop={() => setOnDrag(false)}
    >
      <IconComponent
        onDrag={() => onDrag}
        onDoubleClick={handlerOnClickIcon}
      >
        <Image
          alt=''
          width={32}
          height={32}
          src={icon}
          draggable={false}
        />
        <p>{title}</p>
      </IconComponent>
    </Draggable>
  )
}