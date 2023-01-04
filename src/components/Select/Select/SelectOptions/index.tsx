import { Option } from './styles'

export type SelectOptionProps = React.ComponentPropsWithRef<typeof Option> & {
  value: string | number
  children: React.ReactNode
  selected?: boolean
}

export function SelectOption({ value, children, selected, ...props }: SelectOptionProps) {
  return (
    <Option value={value} selected={selected} {...props}>
      {children}
    </Option>
  )
}
