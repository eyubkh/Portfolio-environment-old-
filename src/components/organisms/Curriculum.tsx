import { WindowProvider } from 'lib/windowContext'
import { Window } from './Window'
import data, { curriculum } from '@utils/data'
import { useEffect, useState } from 'react'
import React from 'react'
import { fetchExternalData } from '@utils/fetch/fetchingExternalData'

export const Curriculum = (): JSX.Element => {
  const { title, icon, url } = data[curriculum]
  const [readme, setReadme] = useState<any | null>(null)

  useEffect(() => {
    (async function () {
      const response = await fetchExternalData(url, true)
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
