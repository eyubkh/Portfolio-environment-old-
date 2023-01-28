import styled from "styled-components"
import useWindowContext from "@utils/useWindowContext"
import { Black100, Grey200 } from "@utils/tokens"
import { WindowActionOptions } from "types/lib/windowTypes"

const WindowMaximizeComponent = styled.div`
  position: relative;
  height: 18px;
  width: 18px;
  background-color: ${Grey200};
  cursor: pointer;
  border-left: 1px solid ${Black100};

  :after {
    content: '';
    position: absolute;
    height: 1px;
    width: 1px;
    background-color: ${Black100};
    top: 50%; 
    left: 50%;
    transform: translateY(calc(-50% - 1.5px));
    box-shadow: 
    -1px 1px ${Black100}, 
    0px 1px ${Black100},
    1px 1px ${Black100},

    -2px 2px ${Black100}, 
    -1px 2px ${Black100},
    0px 2px ${Black100},
    1px 2px ${Black100},
    2px 2px ${Black100},
    
    -3px 3px ${Black100},
    -2px 3px ${Black100},
    -1px 3px ${Black100},
    0px 3px ${Black100},
    1px 3px ${Black100},
    2px 3px ${Black100},
    3px 3px ${Black100};
  }
`

export const WindowMaximize = () => {
  const { dispatch: windowDispatch } = useWindowContext()

  const handlerMax = () => {
    windowDispatch({
      type: WindowActionOptions.FULLSCREEN
    })
  }

  return <WindowMaximizeComponent onClick={handlerMax} />
}