import { Black100, White100 } from '@utils/tokens'
import styled from 'styled-components'

const WindowSubHeaderComponent = styled.div`
  display: flex;
  width: 100%;
  background: ${White100};
  padding: 5px 5px;
  border: 1px solid ${Black100};
  border-top: none;
  gap: 10px;
  h3:first-letter {
    text-decoration: underline;
    text-transform: uppercase;
  }
`

export const WindowSubHeader = (): JSX.Element => {
  return (
    <WindowSubHeaderComponent>
      <h3>File</h3>
      <h3>Options</h3>
      <h3>Window</h3>
      <h3>Help</h3>
    </WindowSubHeaderComponent>
  )
}