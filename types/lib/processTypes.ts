export enum ProcessActionOptions {
  PROCESS
}

export type ProcessActionProps = {
  type: ProcessActionOptions,
  payload?: any
}

export type ProcessStateTypes = {
  processes: string[]
}