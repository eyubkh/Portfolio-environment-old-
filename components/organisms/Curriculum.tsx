import { WindowProvider } from "lib/windowContext"
import { Window } from "./Window"
import data, { curriculum } from "@utils/data"
import { useEffect, useState } from "react"

export const Curriculum = (): JSX.Element => {
  const { title, icon } = data[curriculum]
  const [readme, setReadme] = useState<any | null>(null)
  useEffect(() => {
    (async function () {
      const response = await fetch('https://docs.google.com/document/export?format=html&id=11Qi-i4_nDdEo7gN1O3mEG3sx7O6AqX_2hjceeCuE9Vg')
        .then(data => data.text())
        console.log(typeof response, response)
      setReadme(response)
    })()
  }, [])

  return (
    <WindowProvider>
      <Window
        title={title}
        icon={icon}
        setHeight={600}
        setWidth={800}
      >
        {readme}
      </Window>
    </WindowProvider>
  )
}