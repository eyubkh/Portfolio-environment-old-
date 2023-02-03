export enum WindowActionOptions {
  INIT,
  FULLSCREEN,
  TITLE,
  POSSITION
}

export type WindowStateProps = {
  id: string,
  title: string
  icon: string,
  possition: { x: number, y: number },
  lastPossition: any | undefined,
  isFullScreen: boolean,
  width: number,
  height: number,
}

export type WindowActionProps = {
  type: WindowActionOptions,
  payload?: any
}