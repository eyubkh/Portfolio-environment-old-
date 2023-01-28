export enum ProcessActionOptions {
  PROCESSES,
  ICON_PROCESSES,
  DELETE_ICON_PROCESS,
  DELETE_PROCESSES
}

export type ProcessActionProps = {
  type: ProcessActionOptions,
  payload?: any
}

type ProcessesTypes = {
  [key: string]: JSX.Element
}
export type ProcessStateTypes = {
  processes: ProcessesTypes,
  iconProcesses: IconProcessesTypes
}

type IconProcessesTypes = {
  [key: string]: IconProcessesProps
}

export type IconProcessesProps = {
  id: string,
  icon: string,
  title: string,
}