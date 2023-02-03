import { WindowProvider } from "lib/windowContext"
import { Window } from "./Window"
import data, { englicus, lim, projects } from "@utils/data"
import { Icon } from "components/molecules/Icon"

export const Projects = () => {
  const { title, icon } = data[projects]
  return (
    <WindowProvider>
      <Window
        title={title}
        icon={icon}
      >
        <Icon
          title={data[englicus].title}
          icon={data[englicus].icon}
        />
        <Icon
          title={data[lim].title}
          icon={data[lim].icon}
        />
      </Window>
    </WindowProvider>
  )
}