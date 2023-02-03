import { WindowProvider } from "lib/windowContext"
import { Window } from "./Window"
import data, { sendNote } from "@utils/data"

export const SendNote = () => {
  const { title, icon } = data[sendNote]

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