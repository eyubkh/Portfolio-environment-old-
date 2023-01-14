import { Window } from './Window'
import { IconAboutMe } from 'components/molecules/IconAboutMe'
import { WindowProvider } from 'lib/windowContext'
import { IconProjects } from 'components/molecules/IconProjects'

export const ProgramManager = () => {
  return (
    <WindowProvider>
      <Window title='Program Manager'>
        <IconAboutMe />
        <IconProjects />
      </Window>
    </WindowProvider>
  )
}