import { Window } from './Window'
import { IconAboutMe } from 'components/molecules/IconAboutMe'
import { WindowProvider } from 'lib/windowContext'
import { IconProjects } from 'components/molecules/IconProjects'
import { useEffect } from 'react'

export const ProgramManager = () => {
  return (
    <WindowProvider>
      <Window
        title='Program Manager'
        icon='/icons/PROGM008.ICO'
      >
        <IconAboutMe />
        <IconProjects />
      </Window>
    </WindowProvider>
  )
}