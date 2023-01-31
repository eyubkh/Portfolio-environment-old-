import { Icon } from "./Icon"
import { ProcessActionOptions } from "types/lib/processTypes"
import useProcessContext from "@utils/useProcessContext"
import { aboutMe } from "@utils/data"

export const IconAboutMe = (): JSX.Element => {
  const { dispatch: processDispatch } = useProcessContext()

  const handlerOnClickIcon = (event: any) => {
    event.preventDefault()
    processDispatch({
      type: ProcessActionOptions.PROCESSES,
      payload: {
        [aboutMe.title]: aboutMe.component
      }
    })
  }

  return (
    <Icon
      handler={handlerOnClickIcon}
      src={aboutMe.icon}
    >
      {aboutMe.title}
    </Icon>
  )
}