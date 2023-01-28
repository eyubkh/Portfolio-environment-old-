import { Icon } from "./Icon"
import { ProcessActionOptions } from "types/lib/processTypes"
import { AboutMe } from "components/organisms/AboutMe"
import useProcessContext from "@utils/useProcessContext"

export const IconAboutMe = (): JSX.Element => {
  const { dispatch: processdispatch } = useProcessContext()
  const handlerOnClickIcon = (event: any) => {
    event.preventDefault()
    processdispatch({
      type: ProcessActionOptions.PROCESSES,
      payload: <AboutMe />
    })
  }

  return (
    <Icon
      handler={handlerOnClickIcon}
      src="/icons/PROGM024.ICO"
    >
      About Me
    </Icon>
  )
}