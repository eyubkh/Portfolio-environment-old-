import { WindowProvider } from "lib/windowContext"
import { Window } from "./Window"
import data, { aboutMe } from "@utils/data"
import { useEffect, useState } from "react"
import parse from 'html-react-parser'

export const AboutMe = (): JSX.Element => {
  const { title, icon } = data[aboutMe]
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
        title={title}
        icon={icon}
      >
        <div>{parse(readme)}</div>
      </Window>
    </WindowProvider>
  )
}