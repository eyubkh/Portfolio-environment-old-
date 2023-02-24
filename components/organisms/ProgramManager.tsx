import { Window } from './Window'
import { WindowProvider } from 'lib/windowContext'
import data, { programManager } from '@utils/data'
import { Icon } from 'components/molecules/Icon'
import { uuid as uuid_v4 } from 'uuidv4'

export const ProgramManager = () => {
  const { title, icon, content = [] } = data[programManager]

  return (
    <WindowProvider>
      <Window
        title={title}
        icon={icon}
      >
        {
          content.map((ref: string): JSX.Element => (<Icon
            key={uuid_v4()}
            icon={data[ref].icon}
            title={data[ref].title}
          />))
        }
      </Window>
    </WindowProvider>
  )
}