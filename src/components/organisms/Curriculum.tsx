import { WindowProvider } from 'lib/windowContext'
import { Window } from './Window'
import data, { curriculum } from '@utils/data'
import { useEffect, useState } from 'react'
import React from 'react'
import { fetchCurriculum } from '@utils/fetch/fetchingCurriculum'

export const Curriculum = (): JSX.Element => {
  const { title, icon } = data[curriculum]
  const [readme, setReadme] = useState<any | null>(null)

  useEffect(() => {
    (async function () {
      const response = await fetchCurriculum()
      setReadme(response)
    })()
  }, [])

  return (
    <WindowProvider>
      <Window title={title} icon={icon} setHeight={600} setWidth={800}>
        {readme}
      </Window>
    </WindowProvider>
  )
}
