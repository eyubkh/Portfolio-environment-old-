import { WindowProvider } from "lib/windowContext"
import { Window } from "./Window"
import { sendNote } from "@utils/data"

export const SendNote = () => {
  return (
    <WindowProvider>
      <Window
        title={sendNote.title}
        icon={sendNote.icon}
      >
        <h1>hello</h1>
      </Window>
    </WindowProvider>
  )
}