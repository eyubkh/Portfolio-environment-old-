export enum ProcessActionOptions {
  PROCESSES,
  DELETE_PROCESSES,
  MINIMIZED
}

export type ProcessActionProps = {
  type: ProcessActionOptions,
  payload?: any
}

type ProcessesProps = {
  [key: string]: ProcessesTypes
}
export interface ProcessStateProps {
  processes: ProcessesProps
}

export type ProcessesTypes = {
  id: number,
  component: JSX.Element,
  iconComponent: JSX.Element,
  minimized: boolean,
}