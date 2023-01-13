export enum ActionOptions {
  FULLSCREEN,
  OPEN,
  LIMITED
}

export type WindowStateProps = {
  isFullScreen: boolean,
  isOpen: boolean,
  limited: boolean,
}

export type ActionProps = {
  type: ActionOptions,
  payload?: boolean
}