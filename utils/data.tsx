import { AboutMe } from 'src/components/organisms/AboutMe'
import { Curriculum } from 'src/components/organisms/Curriculum'
import { Englicus } from 'src/components/organisms/Englicus'
import { Lim } from 'src/components/organisms/Lim'
import { ProgramManager } from 'src/components/organisms/ProgramManager'
import { Projects } from 'src/components/organisms/Projects'
import { SendNote } from 'src/components/organisms/SendNote'

export const aboutMe: string = 'About Me'
export const sendNote: string = 'Send Note'
export const programManager: string = 'Program Manager'
export const projects: string = 'Projects'
export const englicus: string = 'Englicus'
export const lim: string = 'Lim'
export const curriculum: string = 'Curiculum'

const data = {
  [aboutMe]: {
    title: aboutMe,
    icon: '/icons/PROGM024.ICO',
    url: 'https://raw.githubusercontent.com/eyubkh/Portfolio/main/README.md',
    component: (id: string) => <AboutMe key={id} />,
  },
  [sendNote]: {
    title: sendNote,
    icon: '/icons/MSMAI001.ICO',
    component: (id: string) => <SendNote key={id} />,
  },
  [programManager]: {
    title: programManager,
    icon: '/icons/PROGM008.ICO',
    component: (id: string) => <ProgramManager key={id} />,
    content: [aboutMe, projects, sendNote, curriculum],
  },
  [projects]: {
    title: projects,
    icon: '/icons/PROGM008.ICO',
    component: (id: string) => <Projects key={id} />,
    content: [englicus, lim],
  },
  [englicus]: {
    title: englicus,
    icon: '/icons/COMMD001.ICO',
    url: 'https://raw.githubusercontent.com/eyubkh/Englicus/main/README.md',
    component: (id: string) => <Englicus key={id} />,
  },
  [lim]: {
    title: lim,
    icon: '/icons/COMMD001.ICO',
    url: 'https://raw.githubusercontent.com/eyubkh/Lim/main/README.md',
    component: (id: string) => <Lim key={id} />,
  },
  [curriculum]: {
    title: curriculum,
    icon: '/icons/COMMD001.ICO',
    component: (id: string) => <Curriculum key={id} />,
    url: "https://docs.google.com/document/export?format=html&id=1KO8NvYvFAEpxQ_4v23xsVdcv3B1bfly-67-O0opw_VI"
  },
}

export default data