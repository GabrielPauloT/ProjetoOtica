/* eslint-disable @typescript-eslint/no-explicit-any */

import {
  Children,
  cloneElement,
  isValidElement,
  JSXElementConstructor,
  ReactElement,
  ReactPortal,
  useEffect,
  useRef,
  useState,
} from 'react'
import { useDetectClickOutside } from 'react-detect-click-outside'
import useScrollbarSize from 'react-scrollbar-size'


import { Icon, IconProps } from '../../../Icon'
import { SelectOptionProps } from '../SelectOptions'

import {
  InputContainer,
  SelectOptions,
  SelectInput,
  SelectContainer,
  ArrowDown,
  DisplayValue,
  Select,
  SelectInputContainer,
  NoOptionsWarning,
  NoOptionsWarningText,
  WrapperIconLeft,
  Error,
} from './styles'

export type CustomSelectProps = React.HTMLProps<HTMLDivElement> & {
  placeholder: string
  children: React.ReactNode
  onChange?: (value: string, event: any) => void
  disabled?: boolean
  autocomplete: boolean
  iconLeft?: Pick<IconProps, 'name'>['name']
  erroMessage?: string
  fullWidth?: boolean
}

export function CustomSelect({
  placeholder,
  children,
  disabled,
  autocomplete,
  erroMessage = '',
  iconLeft,
  fullWidth,
  ...props
}: CustomSelectProps) {
  const { width } = useScrollbarSize()

  const [isOptionsOpen, setIsOptionsOpen] = useState(false)

  const [value, setValue] = useState()
  const [display, setDisplay] = useState()
  const [search, setSearch] = useState('')
  const [active, setActive] = useState(0)

  const selectRef = useRef<HTMLDivElement | null>(null)
  const listRef = useRef<HTMLUListElement | null>(null)
  const clickOutsideRef = useDetectClickOutside({
    onTriggered: closeSelect,
  })

  const hasError = erroMessage?.length > 0

  function verifyScrollExists() {
    const body = document.body
    const html = document.documentElement

    const docHeight = Math.max(
      body.scrollHeight,
      body.offsetHeight,
      html.clientHeight,
      html.scrollHeight,
      html.offsetHeight
    )

    const winHeight = window.innerHeight

    if (docHeight > winHeight) {
      return true
    }

    return false
  }

  const scrollActive = verifyScrollExists()

  useEffect(() => {
    if (isOptionsOpen) {
      scrollActive && (document.body.style.overflow = 'hidden')
      scrollActive && width !== 0 && (document.body.style.paddingRight = width + 'px')
    } else {
      scrollActive && document.body.style.removeProperty('overflow')
      scrollActive && width !== 0 && document.body.style.removeProperty('padding-right')
    }
  }, [isOptionsOpen])

  function toggleSelect() {
    setIsOptionsOpen(!isOptionsOpen)
  }

  function openSelect() {
    setIsOptionsOpen(true)
  }

  function closeSelect() {
    setIsOptionsOpen(false)
  }

  const handleItemClick =
    (
      child:
        | React.ReactElement<any, string | React.JSXElementConstructor<any>>
        | React.ReactPortal
    ) =>
      (event: React.ChangeEvent<HTMLInputElement> | any) => {
        const newValue = child.props.value

        if (child.props.onClick) {
          child.props.onClick(event)
        }

        if (value !== newValue) {
          setValue(newValue)
          setDisplay(newValue !== '' ? child.props.children : '')
          closeSelect()
          setSearch('')

          if (props.onChange) {
            // Clona o evento para não substituir o `target` do evento original.
            // Integração com React Hook Form.
            const nativeEvent = event.nativeEvent || event
            const clonedEvent = new nativeEvent.constructor(nativeEvent.type, nativeEvent)
            Object.defineProperty(clonedEvent, 'target', {
              writable: true,
              value: {
                value: newValue,
                name,
              },
            })
            props.onChange(clonedEvent, child)
          }
        }
      }

  const selectKeyDownCallback = (e: React.KeyboardEvent<HTMLDivElement>) => {
    switch (e.key) {
      case 'ArrowDown':
        listRef.current?.focus()
        listRef.current?.getElementsByTagName('li')[active]?.focus() ??
          listRef.current?.getElementsByTagName('li')[0]?.focus()
        openSelect()

        return
      case 'Enter':
        selectRef.current?.focus()
        listRef.current?.getElementsByTagName('li')[active]?.focus() ??
          listRef.current?.getElementsByTagName('li')[0]?.focus()
        toggleSelect()
    }
  }

  const itemKeyDownCallback = (e: React.KeyboardEvent<HTMLDivElement>) => {
    e.preventDefault()

    switch (e.key) {
      case 'Up':
      case 'ArrowUp':
        e.preventDefault()
        setActive(active <= 0 ? active : active - 1)
        listRef.current
          ?.getElementsByTagName('li')
        [active <= 0 ? active : active - 1]?.focus()

        return
      case 'Down':
      case 'ArrowDown':
        e.preventDefault()
        setActive(active + 1 === items.length ? active : active + 1)
        listRef.current
          ?.getElementsByTagName('li')
        [active + 1 === items.length ? active : active + 1]?.focus()

        return
      case 'Enter':
      case ' ': // Espaço
        e.preventDefault()
        listRef.current?.getElementsByTagName('li')[active]?.click()
        selectRef.current?.focus()
    }
  }

  function areEqualValues(a: any, b: any) {
    return a === b
  }

  const items = Children.toArray(children).map((child, index, arr) => {
    if (!isValidElement(child)) {
      return null
    }

    const selectedOption = areEqualValues(value, child.props.value)

    if (child.props.value === undefined) {
      return cloneElement(
        child as
        | ReactPortal
        | ReactElement<SelectOptionProps, string | JSXElementConstructor<any>>,
        {
          'aria-readonly': 'true',
          role: 'option',
        }
      )
    }

    return cloneElement(
      child as
      | ReactPortal
      | ReactElement<SelectOptionProps, string | JSXElementConstructor<any>>,
      {
        onClick: handleItemClick(child),
        onMouseOver: () => setActive(index),
        onKeyUp: (event: React.KeyboardEvent<HTMLButtonElement>) => {
          if (event.key === ' ') {
            event.preventDefault()
          }

          if (child.props.onKeyUp) {
            child.props.onKeyUp(event)
          }
        },
        onKeyDown: itemKeyDownCallback,
        role: 'option',
        value: undefined,
        selected: selectedOption || arr[0],
        'aria-selected': selectedOption,
        tabIndex: index === active ? 0 : -1,
        'data-value': child.props.value,
      }
    )
  })

  const selectOptions = items.filter(item =>
    String(item?.props.children).toLowerCase().includes(search)
  )

  return (
    <InputContainer ref={clickOutsideRef} fullWidth={fullWidth}>
      <Select
        role='button'
        aria-haspopup='listbox'
        onClick={!disabled ? toggleSelect : undefined}
        onKeyDown={!disabled ? selectKeyDownCallback : undefined}
        aria-pressed={isOptionsOpen}
        aria-expanded={isOptionsOpen}
        tabIndex={0}
        ref={selectRef}
        disabled={disabled}
        error={hasError}
      >
        {iconLeft && (
          <WrapperIconLeft
            error={hasError}
            typed={value !== (undefined || '')}
            disabled={disabled}
          >
            <Icon name={iconLeft} />
          </WrapperIconLeft>
        )}
        <SelectContainer id='react-select-2-placeholder'>
          <DisplayValue
            placeholder={value === undefined && search === ''}
            id='react-select-2-placeholder'
            data-value={value}
            error={hasError}
          >
            {search === '' && (display || placeholder)}
          </DisplayValue>
          {autocomplete && !disabled && (
            <SelectInputContainer>
              <SelectInput
                aria-describedby='react-select-2-placeholder'
                type='text'
                value={search}
                onChange={e => {
                  setSearch(e.target.value)

                  if (!isOptionsOpen) {
                    openSelect()
                  }
                }}
                tabIndex={0}
                autoCorrect='off'
                autoComplete='off'
                autoCapitalize='none'
                aria-autocomplete='list'
                spellCheck='false'
              />
            </SelectInputContainer>
          )}
        </SelectContainer>
        <ArrowDown name='FiChevronDown' aria-hidden open={isOptionsOpen} />
      </Select>
      {isOptionsOpen && (
        <SelectOptions
          expanded={isOptionsOpen}
          tabIndex={-1}
          role='listbox'
          ref={listRef}
        >
          {!autocomplete || disabled ? (
            !disabled && items
          ) : selectOptions.length > 0 ? (
            selectOptions
          ) : (
            <NoOptionsWarning>
              <NoOptionsWarningText>Nenhuma opção encontrada</NoOptionsWarningText>
            </NoOptionsWarning>
          )}
        </SelectOptions>
      )}

      {erroMessage && <Error>{erroMessage}</Error>}
    </InputContainer>
  )
}
