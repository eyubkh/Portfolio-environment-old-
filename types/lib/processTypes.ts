export enum ProcessActionOptions {
  INIT,
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
  icon: {
    src: string,
    title: string,
    alt: string
  },
  minimized: boolean,
}