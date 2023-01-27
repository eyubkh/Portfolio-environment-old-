import Image from "next/image"
import { useState } from "react"
import Draggable from "react-draggable"
import styled from "styled-components"

const IconComponent = styled.div<any>`
  display: inline-block;
  text-align: center;
  padding: 12px;

  p {
    opacity: ${props => props.onDrag() ? 0 : 1};
  }
`

type IconTypes = {
  src: string,
  children: string,
  handler?: Function
}

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