import { Dispatch } from "react"

export enum ProcessDispatchEnum {
  INIT,
  PROCESSES,
  DELETE_PROCESSES,
  MINIMIZED,
  WINDOW_FOCUS
}

export interface ProcessTypes {
  processState: ProcessStateTypes,
  processDispatch: Dispatch<ProcessDispatchTypes>
}

export type ProcessDispatchTypes = {
  type: ProcessDispatchEnum,
  payload?: any
}

export interface ProcessStateTypes {
  processes: {
    [key: string]: ProcessesTypes
  },
  windowFocus: string
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