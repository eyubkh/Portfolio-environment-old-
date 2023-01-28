export interface ChildrenType {
  children: JSX.Element | JSX.Element[]
}

export interface TitleType {
  title: string
}

export interface WindowTypes extends ChildrenType, TitleType {
  icon: string
}
export type IconTypes = {
  src: string,
  children: string,
  handler?: Function
}