import { IconBaseProps } from 'react-icons'
import * as Icons from 'react-icons/all'

import { ContainerIcon } from './styles'

export type IconProps = IconBaseProps & {
  name: keyof typeof Icons
}

export function Icon({ name, size, ...props }: IconProps) {
  const CurrentIcon = Icons[name]

  return (
    <ContainerIcon>
      <CurrentIcon size={size || 24} {...props} />
    </ContainerIcon>
  )
}
