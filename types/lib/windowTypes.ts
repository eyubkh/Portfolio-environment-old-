export enum WindowDispatchEnum {
  INIT,
  FULLSCREEN,
  TITLE,
  POSSITION
}

export type WindowStateTypes = {
  id: string,
  isLoading: boolean,
  title: string
  icon: string,
  possition: { x: number, y: number },
  lastPossition: any | undefined,
  isFullScreen: boolean,
  width: number,
  height: number,
}

export type WindowDispatchTypes = {
  type: WindowDispatchEnum,
  payload?: any
}