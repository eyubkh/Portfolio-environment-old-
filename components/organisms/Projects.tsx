import { WindowProvider } from "lib/windowContext"
import { Window } from "./Window"
import data, { projects } from "@utils/data"
import { Icon } from "components/molecules/Icon"
import { uuid as uuid_v4 } from "uuidv4"

export const Projects = () => {
  const { title, icon, content = [] } = data[projects]
  return (
    <WindowProvider>
      <Window
        title={title}
        icon={icon}
      >
        {
          content.map((ref: string): JSX.Element => (<Icon
            key={uuid_v4()}
            title={data[ref].title}
            icon={data[ref].icon}
          />))
        }
      </Window>
    </WindowProvider>
  )
}