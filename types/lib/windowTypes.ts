export enum WindowActionOptions {
  FULLSCREEN,
  OPEN,
  LIMITED,
  ID,
  POSSITION
}

export type WindowStateProps = {
  id: string,
  possition: { x: number, y: number },
  lastPossition: any | undefined,
  isFullScreen: boolean,
  isOpen: boolean,
  limited: boolean,
}

export type WindowActionProps = {
  type: WindowActionOptions,
  payload?: any
}