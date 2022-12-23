import styled from "styled-components"

const WindowCloseComponent = styled.div`
  position: relative;
  height: 18px;
  width: 18px;
  border: solid 1px black;
  background-color: #C0C4C8;
  cursor: pointer;

  :after {
    content: '';
    position: absolute;
    height: 1px;
    width: 11px;
    background-color: #FCFCFC;
    top: 50%; 
    left: 50%;
    transform: translateY(-50%) translateX(-50%);
    border: solid 1px black;
    box-shadow: 1px 1px #808080;
  }
  
`

export const WindowClose = () => {
  return <WindowCloseComponent />

}