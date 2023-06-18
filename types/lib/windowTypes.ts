import { Dispatch } from "react"

export enum WindowDispatchEnum {
  INIT,
  FULLSCREEN,
  TITLE,
  POSSITION
}

export interface WindowTypes {
  windowState: WindowStateTypes,
  windowDispatch: Dispatch<WindowDispatchTypes>
}

export type WindowStateTypes = {
  id: string,
  isLoading: boolean,
  title: string
  icon: string,
  possition: { x: number, y: number } | undefined,
  lastPossition: any | undefined,
  isFullScreen: boolean,
  width: number,
  height: number,
}

export type WindowDispatchTypes = {
  type: WindowDispatchEnum,
  payload?: any
}

export type WindowDispatcher = (dispatch: WindowDispatchTypes) => void