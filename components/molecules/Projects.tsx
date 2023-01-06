import { Icon } from "components/atoms/Icon"
import { useState } from "react"
import Draggable from "react-draggable"
import styled from "styled-components"

const ProjectsComponent = styled.div`
  display: inline-block;
  text-align: center;
  background-color: #f5f5f5;
  padding: 12px;
`

export const Projects = () => {
  const [onDrag, setOnDrag] = useState(false)

  return(
    <Draggable
      onStart={() => setOnDrag(true)}
      onStop={() => setOnDrag(false)}
    >
      <ProjectsComponent>
        <Icon 
          src="/icons/PROGM008.ICO"
        />
        <p style={{opacity: onDrag ? 0 : 1}}>Projects</p>
      </ProjectsComponent>
    </Draggable>
  )
}