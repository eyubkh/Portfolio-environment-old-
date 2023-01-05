import { Black100, Blue100, White100 } from '@utils/tokens'
import styled from 'styled-components'

const WindowTitleComponent = styled.strong`
  display: grid;
  place-content: center;
  background-color: ${Blue100};
  text-align: center;
  height: 18px;
  width: 100%;
  color: ${White100};

`

export const WindowTitle = () => {
  return <WindowTitleComponent>
    <h3>default text</h3>
  </WindowTitleComponent>
}