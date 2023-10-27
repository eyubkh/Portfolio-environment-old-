import { WindowProvider } from 'lib/windowContext'
import { Window } from './Window'
import { useEffect, useState } from 'react'
import data, { lim } from '@utils/data'
import { fetchExternalData } from '@utils/fetch/fetchingExternalData'

export const Lim = () => {
  const { title, icon, url } = data[lim]
  const [readme, setReadme] = useState<any | null>(null)
  useEffect(() => {
    (async function () {
      const response = await fetchExternalData(url)
      setReadme(response)
    })()
  }, [url])
  return (
    <WindowProvider>
      <Window title={title} icon={icon}>
        {readme}
      </Window>
    </WindowProvider>
  )
}
