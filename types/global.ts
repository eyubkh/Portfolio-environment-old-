import { Dispatch } from "react"
import { ProcessDispatchTypes, ProcessTypes } from "./lib/processTypes"
import { WindowStateTypes } from "./lib/windowTypes"

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
  icon: string
}

export interface HandlerWindowfocus extends ProcessTypes, IdType { }

export type IconTypes = {
  icon: string,
  title: string,
  handler?: any
}
