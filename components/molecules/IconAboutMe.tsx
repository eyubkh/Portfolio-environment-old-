import { Icon } from "./Icon"
import { ProcessActionOptions } from "types/lib/processTypes"
import useProcessContext from "@utils/useProcessContext"
import { aboutMe } from "@utils/data"

export const IconAboutMe = (): JSX.Element => {
  const { state: processState, dispatch: processDispatch } = useProcessContext()

  const handlerOnClickIcon = (event: any) => {
    event.preventDefault()
    if (processState.processes[aboutMe.title]) {
      processDispatch({
        type: ProcessActionOptions.MINIMIZED,
        payload: [aboutMe.title, false]
      })

    } else {
      processDispatch({
        type: ProcessActionOptions.PROCESSES,
        payload: {
          [aboutMe.title]: {
            component: aboutMe.component(),
            iconComponent: aboutMe.iconComponent()
          }
        }
      })
    }

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