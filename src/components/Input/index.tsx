//@ts-nocheck
import { Icon, IconProps } from '../Icon'

import { Input, InputSpan, InputContainer, WrapperIconLeft, MainDiv } from './styles'

export type CustomInputProps = React.ComponentPropsWithRef<typeof Input> &
  React.HTMLProps<HTMLInputElement> & {
    erroMessage?: string
    disabled?: boolean
    placeholder?: string
    IconLeft?: Pick<IconProps, 'name'>['name']
    widthProp: string,
    tipo?: string
  }
export function CustomInput({
  ref,
  disabled,
  erroMessage = '',
  placeholder,
  value,
  IconLeft,
  widthProp,
  tipo,
  ...props
}: CustomInputProps) {
  const hasError = erroMessage?.length > 0

  const tel = document.getElementById('tel') // Seletor do campo de telefone

  tel?.addEventListener('keypress', (e) => mascaraTelefone(e.target.value)) // Dispara quando digitado no campo
  tel?.addEventListener('change', (e) => mascaraTelefone(e.target.value)) // Dispara quando autocompletado o campo

  const mascaraTelefone = (valor: string) => {
    valor = valor.replace(/\D/g, "")
    valor = valor.replace(/^(\d{2})(\d)/g, "($1) $2")
    valor = valor.replace(/(\d)(\d{4})$/, "$1-$2")
    tel.value = valor // Insere o(s) valor(es) no campo
  }

  return (
    <MainDiv>
      <InputContainer css={{ width: widthProp }} error={hasError} disabled={disabled}>
        {IconLeft && (
          <WrapperIconLeft error={hasError} typed={value !== ''}>
            <Icon name={IconLeft} />
          </WrapperIconLeft>
        )}
        <Input
          {...props}
          type={tipo}
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
