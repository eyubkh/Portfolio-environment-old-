import { Window } from './Window'
import { WindowProvider } from 'lib/windowContext'
import data, { programManager } from '@utils/data'
import { Icon } from 'components/molecules/Icon'

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
            key={crypto.randomUUID()}
            icon={data[ref].icon}
            title={data[ref].title}
          />))
        }
      </Window>
    </WindowProvider>
  )
}