import { AboutMe } from "components/organisms/AboutMe"
import { Englicus } from "components/organisms/Englicus"
import { Lim } from "components/organisms/Lim"
import { ProgramManager } from "components/organisms/ProgramManager"
import { Projects } from "components/organisms/Projects"
import { SendNote } from "components/organisms/SendNote"

export const aboutMe: string = 'About Me'
export const sendNote: string = 'Send Note'
export const programManager: string = 'Program Manager'
export const projects: string = 'Projects'
export const englicus: string = 'Englicus'
export const lim: string = 'Lim'


export default {
  [aboutMe]: {
    title: aboutMe,
    icon: '/icons/PROGM024.ICO',
    component: (id: string) => <AboutMe key={id} />,
    url: '/eyubkh/Portfolio/main/README.md'
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
  },
  [projects]: {
    title: projects,
    icon: '/icons/PROGM008.ICO',
    component: (id: string) => <Projects key={id} />
  },
  [englicus]: {
    title: englicus,
    icon: '/icons/COMMD001.ICO',
    url: '/eyubkh/Englicus/main/README.md',
    component: (id: string) => <Englicus key={id} />
  },
  [lim]: {
    title: lim,
    icon: '/icons/COMMD001.ICO',
    url: '/eyubkh/Lim/main/README.md',
    component: (id: string) => <Lim key={id} />
  }
}