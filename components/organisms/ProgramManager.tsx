import styled from 'styled-components'
import { White100 } from '@utils/tokens'
import { Window } from './Window'
import { IconAboutMe } from 'components/molecules/IconAboutMe'
import { WindowProvider } from 'context/windowContext'


const ProgramManagerComponent = styled.div`
  place-content: center;
  width: 500px;
  height:  300px;
  background-color: ${White100};
`

export const ProgramManager = () => {
  return (
    <WindowProvider>
      <Window title='Program Manager'>
        <IconAboutMe />
      </Window>
    </WindowProvider>
  )
}