import { Dispatch } from "react"

export enum ProcessDispatchEnum {
  INIT,
  PROCESSES,
  DELETE_PROCESSES,
  MINIMIZED,
  Z_INDEX
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
  zIndex: number
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