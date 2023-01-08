import { Icon } from "components/atoms/Icon"
import Draggable from "react-draggable"
import styled from "styled-components"

const IconAboutMeComponent = styled.div`
  display: inline-block;
  text-align: center;
  background-color: #f5f5f5;
  padding: 12px;
`

export const IconAboutMe = (): JSX.Element => {

  const handlerClick = () => {
    console.log('hello')
  }

  return(
    <Draggable>
      <IconAboutMeComponent
        onClick={handlerClick}
      >
        <Icon
          src="/icons/PROGM024.ICO"
        />
          <p>About Me</p>
      </IconAboutMeComponent>
    </Draggable>
  )
}