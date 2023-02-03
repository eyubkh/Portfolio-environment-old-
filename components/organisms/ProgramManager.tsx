import { Window } from './Window'
import { IconAboutMe } from 'components/molecules/IconAboutMe'
import { WindowProvider } from 'lib/windowContext'
import { IconProjects } from 'components/molecules/IconProjects'
import { IconSendNote } from 'components/molecules/IconSendNote'
import data, { programManager } from '@utils/data'

export const ProgramManager = () => {
  const { title, icon } = data[programManager]

  return (
    <WindowProvider>
      <Window
        title={title}
        icon={icon}
      >
        <IconAboutMe />
        <IconProjects />
        <IconSendNote />
      </Window>
    </WindowProvider>
  )
}