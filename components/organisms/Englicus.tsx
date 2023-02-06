import { WindowProvider } from "lib/windowContext"
import { Window } from "./Window"
import data, { englicus } from "@utils/data"
import { useEffect, useState } from "react"
import { fetchingMarkDown } from "@utils/fetchingMarkDown"

export const Englicus = () => {
  const { title, icon, url } = data[englicus]
  const [readme, setReadme] = useState<any>(null)
  useEffect(() => {
    (async function () {
      const response = await fetchingMarkDown(url)
      setReadme(response)
    })()
  }, [])
  return (
    <WindowProvider>
      <Window
        title={title}
        icon={icon}
      >
        {readme}
      </Window>
    </WindowProvider>
  )
}