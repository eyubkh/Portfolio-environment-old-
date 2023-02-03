import { WindowProvider } from "lib/windowContext"
import { Window } from "./Window"
import { useEffect, useState } from "react"
import parse from 'html-react-parser'

type readmeTypes = {
  title: string,
  icon: string
}

export const ReadMe = ({ title, icon }: readmeTypes): JSX.Element => {
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