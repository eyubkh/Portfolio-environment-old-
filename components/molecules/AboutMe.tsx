import { Icon } from "components/atoms/Icon"
import Draggable from "react-draggable"
import styled from "styled-components"

const AboutMeComponent = styled.div`
  display: inline-block;
  text-align: center;
  background-color: #f5f5f5;
  padding: 12px;
`

export const AboutMe = (): JSX.Element => {
  return(
    <Draggable>
      <AboutMeComponent>
        <Icon
          src="/icons/PROGM024.ICO"
        />
          <p>About Me</p>
      </AboutMeComponent>
    </Draggable>
  )
}