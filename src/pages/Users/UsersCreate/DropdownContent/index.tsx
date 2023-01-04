import { SelectOption } from '@otica/components/Select'

import { CustomSelectStyled, StyledH3, TextDropdown, WrapperContent } from './styles'

const options = [
  {
    id: 1,
    name: 'Opção 1',
  },
  {
    id: 2,
    name: 'Opção 2',
  },
  {
    id: 3,
    name: 'Opção 3',
  },
  {
    id: 4,
    name: 'Opção 4',
  },
  {
    id: 5,
    name: 'Opção 5',
  },
]

export type DropdownContentProps = React.ComponentPropsWithRef<typeof TextDropdown> &
  React.HTMLProps<HTMLDivElement> & {
    title: string
    type?: 'neg'
  }

export function DropdownContent({ title, type }: DropdownContentProps) {
  return (
    <WrapperContent>
      <StyledH3>{title}</StyledH3>
      <CustomSelectStyled
        name='course'
        autocomplete={false}
        placeholder='Selecione uma opção'
        fullWidth={false}
        disabled={false}
        type={type}
      >
        <SelectOption value=''>
          <em>Selecione uma opção</em>
        </SelectOption>
        {options.map(option => (
          <SelectOption key={option.id} value={option.id}>
            {option.name}
          </SelectOption>
        ))}
      </CustomSelectStyled>
    </WrapperContent>
  )
}
