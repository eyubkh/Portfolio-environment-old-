import styled from "styled-components"
import { Projects } from "./Projects"
import { IconAboutMe } from "./IconAboutMe"

const WindowContentComponent = styled.div`
  height: 100%;
  width: 100%;
  background-color: red;
  overflow: hidden;
`

interface PropsType {
  children: JSX.Element
}

export const WindowContent = ({ children }: PropsType): JSX.Element => {
  return (
    <WindowContentComponent>
      <Projects />
      <IconAboutMe />
      {children}
    </WindowContentComponent>
  )
}