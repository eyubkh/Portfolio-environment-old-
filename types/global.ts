import { Dispatch } from "react"
import { ProcessDispatchTypes } from "./lib/processTypes"

export interface ChildrenType {
  children: JSX.Element | JSX.Element[]
}

export interface TitleType {
  title: string
}

export interface IdType {
  id: string
}

export interface WindowTypes extends ChildrenType, TitleType {
  icon: string,
  setHeight?: number,
  setWidth?: number
}

export interface HandlerWindowfocus extends TitleType {
  processDispatch: Dispatch<ProcessDispatchTypes>
}

export type IconTypes = {
  icon: string,
  title: string,
  handler?: any
}
