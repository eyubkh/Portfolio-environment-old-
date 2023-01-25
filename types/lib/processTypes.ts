export enum ProcessActionOptions {
  PROCESSES,
  ICONPROCESSES
}

export type ProcessActionProps = {
  type: ProcessActionOptions,
  payload?: any
}

export type ProcessStateTypes = {
  processes: JSX.Element[],
  iconProcesses: Object[]
}