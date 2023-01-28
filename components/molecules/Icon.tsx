import styled from "styled-components"
import Draggable from "react-draggable"
import Image from "next/image"
import { useState } from "react"
import { IconTypes } from "types/global"

const IconComponent = styled.div<any>`
  display: inline-block;
  text-align: center;
  padding: 12px;

  p {
    opacity: ${props => props.onDrag() ? 0 : 1};
  }
`

export const Icon = ({ src, children, handler }: IconTypes): JSX.Element => {
  const [onDrag, setOnDrag] = useState(false)

  return (
    <Draggable
      bounds='parent'
      onStart={() => setOnDrag(true)}
      onStop={() => setOnDrag(false)}
    >
      <IconComponent
        onDrag={() => onDrag}
        onDoubleClick={handler}
      >
        <Image
          alt=''
          width={32}
          height={32}
          src={src}
          draggable={false}
        />
        <p>{children}</p>
      </IconComponent>
    </Draggable>
  )
}