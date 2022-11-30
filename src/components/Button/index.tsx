import { Icon, IconProps } from '../Icon'

import {
  ContainerButton,
  SpanText,
  WrapperIconLeft,
  WrapperIconRight,
  WrapperIconCenter,
} from './styles'

export type ButtonProps = React.ComponentPropsWithRef<typeof ContainerButton> &
  React.HTMLProps<HTMLButtonElement> & {
    variant?: 'contained' | 'outlined' | 'rounded' | 'iconTextButton'

    dimension?: 'xsmall' | 'small' | 'medium' | 'large'
    IconLeft?: Pick<IconProps, 'name'>['name']
    IconRight?: Pick<IconProps, 'name'>['name']
    IconCenter?: Pick<IconProps, 'name'>['name']
  }

export function Button({
  children = 'Button',
  ref,
  IconRight,
  IconLeft,
  IconCenter,
  ...props
}: ButtonProps) {
  return (
    <ContainerButton ref={ref} {...props}>
      {IconLeft && (
        <WrapperIconLeft>
          <Icon name={IconLeft} />
        </WrapperIconLeft>
      )}

      {IconCenter && (
        <WrapperIconCenter>
          <Icon name={IconCenter} />
        </WrapperIconCenter>
      )}

      <SpanText>{children}</SpanText>
      {IconRight && (
        <WrapperIconRight>
          <Icon name={IconRight} />
        </WrapperIconRight>
      )}
    </ContainerButton>
  )
}
