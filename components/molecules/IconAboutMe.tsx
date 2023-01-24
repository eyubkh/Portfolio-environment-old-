import { useContext } from "react"
import { Icon } from "./Icon"
import { ProcessContext } from "lib/processContext"
import { ProcessActionOptions } from "types/lib/processTypes"
import { AboutMe } from "components/organisms/AboutMe"

export const IconAboutMe = (): JSX.Element => {
  const { dispatch: addProcesses } = useContext(ProcessContext)
  const handlerClick = (event: any) => {
    event.preventDefault()
    addProcesses({
      type: ProcessActionOptions.PROCESSES,
      payload: <AboutMe />
    })
  }
  return (
    <Icon
      handler={handlerClick}
      src="/icons/PROGM024.ICO"
    >
      About Me
    </Icon>
  )
}