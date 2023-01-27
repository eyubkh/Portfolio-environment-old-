import { WindowProvider } from "lib/windowContext"
import Image from "next/image"
import { Window } from "./Window"

export const AboutMe = (): JSX.Element => {
  return (
    <WindowProvider>
      <Window
        title="About Me"
        icon="/icons/PROGM024.ICO"
      >
        <Image
          src="/img/me.png"
          alt="Photo of Ayoub Khalfaoui Hadi"
          height={200}
          width={200}
        />
      </Window>
    </WindowProvider>
  )
}