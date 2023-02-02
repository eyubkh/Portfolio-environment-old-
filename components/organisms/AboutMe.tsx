import { WindowProvider } from "lib/windowContext"
import { Window } from "./Window"
import { aboutMe } from "@utils/data"
import { useEffect, useState } from "react"
import parse from 'html-react-parser'

export const AboutMe = (): JSX.Element => {
  const [readme, setReadme] = useState('')
  useEffect(() => {
    (async function () {
      const response = await window.fetch('/api/fetchmd')
        .then(data => data.text())
      setReadme(response)
    })()
  }, [])

  return (
    <WindowProvider>
      <Window
        title={aboutMe.title}
        icon={aboutMe.icon}
      >
        <div>{parse(readme)}</div>
      </Window>
    </WindowProvider>
  )
}