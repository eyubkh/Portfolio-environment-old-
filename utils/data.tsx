import { AboutMe } from "components/organisms/AboutMe"
import { ProgramManager } from "components/organisms/ProgramManager"
import { SendNote } from "components/organisms/SendNote"

export const aboutMe: string = 'About Me'
export const sendNote: string = 'Send Note'
export const programManager: string = 'Program Manager'

export default {
  [aboutMe]: {
    title: aboutMe,
    icon: '/icons/PROGM024.ICO',
    component: (id: string) => <AboutMe key={id} />,
    readme: '/eyubkh/Portfolio/main/README.md'
  },
  [sendNote]: {
    title: sendNote,
    icon: '/icons/MSMAI001.ICO',
    component: (id: string) => <SendNote key={id} />
  },
  [programManager]: {
    title: programManager,
    icon: '/icons/PROGM008.ICO',
    component: (id: string) => <ProgramManager key={id} />
  }
}