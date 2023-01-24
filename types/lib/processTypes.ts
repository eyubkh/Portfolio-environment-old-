export enum ProcessActionOptions {
  PROCESSES
}

export type ProcessActionProps = {
  type: ProcessActionOptions,
  payload?: any
}

export type ProcessStateTypes = {
  processes: JSX.Element[]
}