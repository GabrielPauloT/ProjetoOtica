import { Controller, ControllerProps, Control } from 'react-hook-form'

import { CustomSelect, CustomSelectProps } from '../Select'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type ExtractTypeOfControl<T extends Control<any, any>> = T extends Control<infer U, any>
  ? U
  : never

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type InputUncontrolledProps<TControl extends Control<any, any>> = Omit<
  ControllerProps,
  'render' | 'control'
> &
  Omit<CustomSelectProps, 'onBlur' | 'onChangeText' | 'value'> & {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    control?: TControl
    erroMessage?: string
    name: keyof ExtractTypeOfControl<TControl>
  }

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function SelectUncontrolled<TControl extends Control<any, any>>({
  control,
  name,
  defaultValue,
  rules,
  shouldUnregister,
  ...restProps
}: InputUncontrolledProps<TControl>) {
  return (
    <Controller
      control={control}
      rules={rules}
      name={name}
      defaultValue={defaultValue}
      shouldUnregister={shouldUnregister}
      render={({ field: { onChange, onBlur, value } }) => (
        <CustomSelect onBlur={onBlur} onChange={onChange} value={value} {...restProps} />
      )}
    />
  )
}
