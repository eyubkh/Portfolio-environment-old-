import { WindowProvider } from 'lib/windowContext'
import { Window } from './Window'
import data, { englicus } from '@utils/data'
import { useEffect, useState } from 'react'
import { fetchExternalData } from '@utils/fetch/fetchingExternalData'

export const Englicus = () => {
  const { title, icon, url } = data[englicus]
  const [readme, setReadme] = useState<any>(null)
  useEffect(() => {
    (async function () {
      const response = await fetchExternalData(url)
      setReadme(response)
    })()
  }, [url])
  return (
    <WindowProvider>
      <Window title={title} icon={icon} setHeight={600} setWidth={800}>
        {readme}
      </Window>
    </WindowProvider>
  )
}
