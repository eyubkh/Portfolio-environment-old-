import styled from "styled-components"

const WindowMinimizeComponent = styled.div`
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
    transform: translateY(calc(-50% - 1.5px)) translateX(calc(-50% - 3px));
    box-shadow: 
    1px 0px black,
    2px 0px black,
    3px 0px black,
    4px 0px black,
    5px 0px black,
    6px 0px black,

    1px 1px black,
    2px 1px black,
    3px 1px black,
    4px 1px black,
    5px 1px black,

    2px 2px black,
    3px 2px black,
    4px 2px black,
    
    3px 3px black
    ;
  }
`

export const WindowMinimize = () => {
  return <WindowMinimizeComponent />
}