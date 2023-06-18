export interface ChildrenType {
  children: JSX.Element | JSX.Element[]
}

export interface TitleType {
  title: string
}

export interface IdType {
  id: string
}

export interface WindowPropsTypes extends ChildrenType, TitleType {
  icon: string
  setHeight?: number
  setWidth?: number
  setfullscreen?: boolean
}

export type IconTypes = {
  icon: string
  title: string
  handler?: any
}

export type ColorType = `#${string}`
