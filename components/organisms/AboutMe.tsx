import Draggable from "react-draggable"
import styled from "styled-components"

const AboutMeComponent = styled.div`
  width: 400px;
  height: 400px;
  background-color: yellow;
`

export const AboutMe = (): JSX.Element => {
  return(
    <Draggable>
      <AboutMeComponent>
        <h1>hello about</h1>
      </AboutMeComponent>
    </Draggable>
  )
}