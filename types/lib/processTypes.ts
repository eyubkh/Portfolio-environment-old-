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

export type ProcessStateTypes = {
  processes: JSX.Element[] | undefined[],
  iconProcesses: IconProcessesTypes[] | undefined[]
}

export type IconProcessesTypes = {
  icon: string,
  id: string,
  title: string,
  processPossition: number
}