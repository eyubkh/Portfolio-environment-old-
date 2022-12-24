import { Black100, Blue100, White100 } from '@utils/tokens'
import styled from 'styled-components'

const WindowTitleComponent = styled.div`
  display: grid;
  place-content: center;
  background-color: ${Blue100};
  text-align: center;
  height: 18px;
  width: 100%;
  color: ${White100};
  border: 1px solid ${Black100};
  border-left: none;
  border-right: none;

`

export const WindowTitle = () => {
  return <WindowTitleComponent>default text</WindowTitleComponent>
}