import { CustomInput, CustomInputProps } from '@otica/components/Input'
import { Controller, ControllerProps, Control } from 'react-hook-form'


// eslint-disable-next-line @typescript-eslint/no-explicit-any
type ExtractTypeOfControl<T extends Control<any, any>> = T extends Control<infer U, any>
  ? U
  : never

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type InputUncontrolledProps<TControl extends Control<any, any>> = Omit<
  ControllerProps,
  'render' | 'control'
> &
  Omit<CustomInputProps, 'onBlur' | 'onChangeText' | 'value'> & {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    control?: TControl
    erroMessage?: string
    name: keyof ExtractTypeOfControl<TControl>
  }

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function InputUncontrolled<TControl extends Control<any, any>>({
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
        <CustomInput onBlur={onBlur} onChange={onChange} value={value} {...restProps} />
      )}
    />
  )
}
