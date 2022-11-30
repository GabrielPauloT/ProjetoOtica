import { Icon, IconProps } from '../Icon'

import { Input, InputSpan, InputContainer, WrapperIconLeft, MainDiv } from './styles'

export type CustomInputProps = React.ComponentPropsWithRef<typeof Input> &
  React.HTMLProps<HTMLInputElement> & {
    erroMessage?: string
    disabled?: boolean
    placeholder?: string
    IconLeft?: Pick<IconProps, 'name'>['name']
  }
export function CustomInput({
  ref,
  disabled,
  erroMessage = '',
  placeholder,
  value,
  IconLeft,
  ...props
}: CustomInputProps) {
  const hasError = erroMessage?.length > 0

  return (
    <MainDiv>
      <InputContainer error={hasError} disabled={disabled}>
        {IconLeft && (
          <WrapperIconLeft error={hasError} typed={value !== ''}>
            <Icon name={IconLeft} />
          </WrapperIconLeft>
        )}
        <Input
          {...props}
          ref={ref}
          error={hasError}
          disabled={disabled}
          placeholder={placeholder}
        />
      </InputContainer>

      {erroMessage && <InputSpan>{erroMessage}</InputSpan>}
    </MainDiv>
  )
}
