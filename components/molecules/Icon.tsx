import styled from "styled-components"
import Draggable from "react-draggable"
import Image from "next/image"
import { useState } from "react"
import { IconTypes } from "types/global"
import useProcessContext from "@utils/useProcessContext"
import { handlerOnClickIcon } from "@utils/handlers/onClickIcon"

const IconComponent = styled.div<any>`
  display: inline-block;
  text-align: center;
  padding: 12px;
  filter: ${props => props.onDrag() ? 'grayscale(100%)' : 'none'};
  p {
    opacity: ${props => props.onDrag() ? 0 : 1};
  }
`

export const Icon = ({ icon, title }: IconTypes): JSX.Element => {
  const [onDrag, setOnDrag] = useState(false)
  const processContext = useProcessContext()

  return (
    <Draggable
      onStart={() => setOnDrag(true)}
      onStop={() => setOnDrag(false)}
    >
      <IconComponent
        onDrag={() => onDrag}
        onDoubleClick={() => handlerOnClickIcon(title, processContext)}
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