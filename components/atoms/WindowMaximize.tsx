import styled from "styled-components"

const WindowMaximizeComponent = styled.div`
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
    width: 1px;
    background-color: black;
    top: 50%; 
    left: 50%;
    transform: translateY(calc(-50% - 1.5px));
    box-shadow: 
    -1px 1px black, 
    0px 1px black,
    1px 1px black,

    -2px 2px black, 
    -1px 2px black,
    0px 2px black,
    1px 2px black,
    2px 2px black,
    
    -3px 3px black,
    -2px 3px black,
    -1px 3px black,
    0px 3px black,
    1px 3px black,
    2px 3px black,
    3px 3px black


    ;
  }
`

export const WindowMaximize = () => {
  return <WindowMaximizeComponent />
}