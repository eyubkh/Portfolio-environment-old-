import styled from 'styled-components'
import Image from 'next/image'

const IconComponent = styled.div``

type IconProps = {
  src: string;
}

export const Icon = ({ src = '/icons/COMMD001.png' }: IconProps): JSX.Element => {
  return(
    <IconComponent>
      <Image 
        alt='icons'
        src={src}
        width={32}
        height={32}
        draggable={false}
      />
    </IconComponent>
  )
}