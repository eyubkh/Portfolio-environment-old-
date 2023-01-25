import { Icon } from "./Icon"

export const IconProcesses = ({ id, title, icon }: { id: string, title: string, icon: string }): JSX.Element => {
  const handlerOnClick = (event: any) => {
    event.preventDefault()
    const el = document.getElementById(id)
    if (el) {
      el.style.display = 'inherit'
    }

  }

  return <Icon handler={handlerOnClick} src={icon}>{title}</Icon>
}