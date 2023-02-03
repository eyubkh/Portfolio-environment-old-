import { WindowProvider } from "lib/windowContext"
import { Window } from "./Window"
import data, { projects } from "@utils/data"

export const Projects = () => {
  const { title, icon } = data[projects]
  return (
    <WindowProvider>
      <Window
        title={title}
        icon={icon}
      >
      </Window>
    </WindowProvider>
  )
}