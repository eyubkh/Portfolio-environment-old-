import { WindowProvider } from "lib/windowContext"
import Image from "next/image"
import { Window } from "./Window"
import { aboutMe } from "@utils/data"
import { useEffect } from "react"
export const AboutMe = (): JSX.Element => {
  useEffect(() => {
    (async function fechingMD() {
      const response = await window.fetch('/api/fetchmd')
      console.log(response)
    })()
  }, [])
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