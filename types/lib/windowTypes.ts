export enum WindowActionOptions {
  FULLSCREEN,
  TITLE,
  ICON,
  ID,
  POSSITION
}

export type WindowStateProps = {
  id: string,
  possition: { x: number, y: number },
  lastPossition: any | undefined,
  isFullScreen: boolean,
  icon: string,
  title: string
}

export type WindowActionProps = {
  type: WindowActionOptions,
  payload?: any
}