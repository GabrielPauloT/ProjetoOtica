import { ElementType } from 'react'

export type StitchesProps<
  T extends ElementType<unknown>,
  HtmlElement
> = React.ComponentPropsWithRef<T> & React.HTMLProps<HtmlElement>
