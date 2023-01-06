import Draggable from "react-draggable"
import styled from "styled-components"
import { Projects } from "./Projects"
import { AboutMe } from "./AboutMe"

const WindowContentComponent = styled.div`
  height: 100%;
  width: 100%;
  background-color: red;
  overflow: hidden;

`

export const WindowContent = () => {
  return (
    <WindowContentComponent>
        <Projects />
        <AboutMe />
    </WindowContentComponent>
  )
}