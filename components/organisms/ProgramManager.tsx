import { Window } from './Window'
import { WindowProvider } from 'lib/windowContext'
import data, { programManager, aboutMe, projects, sendNote } from '@utils/data'
import { Icon } from 'components/molecules/Icon'

export const ProgramManager = () => {
  const { title, icon } = data[programManager]

  return (
    <WindowProvider>
      <Window
        title={title}
        icon={icon}
      >
        <Icon
          icon={data[aboutMe].icon}
          title={data[aboutMe].title}
        />
        <Icon
          icon={data[projects].icon}
          title={data[projects].title}
        />
        <Icon
          icon={data[sendNote].icon}
          title={data[sendNote].title}
        />
      </Window>
    </WindowProvider>
  )
}