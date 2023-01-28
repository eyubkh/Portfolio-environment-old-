import { WindowProvider } from "lib/windowContext"
import Image from "next/image"
import { Window } from "./Window"
import { aboutMe } from "@utils/data"

export const AboutMe = (): JSX.Element => {
  return (
    <WindowProvider>
      <Window
        title={aboutMe.title}
        icon={aboutMe.icon}
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