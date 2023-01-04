import { styled } from '@otica/configs/stiches'

import { Icon } from '../../../Icon'

const SelectDefaultHeight = '3.5rem'

export const InputContainer = styled('div', {
  width: '21.125rem',
  height: SelectDefaultHeight,

  variants: {
    fullWidth: {
      true: {
        width: '100%',
      },
    },
  },
})

export const Select = styled('div', {
  width: '100%',
  height: SelectDefaultHeight,
  display: 'inline-flex',
  borderRadius: '4px',
  lineHeight: '150%',
  borderStyle: 'solid',
  borderWidth: 1,
  background: '$white',
  borderColor: '$primary_40',
  padding: '1rem 1.5rem',

  fontSize: '1rem',
  fontFamily: 'Roboto',
  fontWeight: 600,

  cursor: 'pointer',

  boxSizing: 'border-box',

  '&:focus': {
    outline: 'none',
    color: '$base_100',
  },

  '&:hover': {
    borderColor: '$primary_80',
    borderWidth: 1,
  },

  variants: {
    error: {
      true: {
        borderColor: '$error_100',
        color: '$error_100',
        '&:hover': {
          borderColor: '$error_100',
        },
        '&:focus': {
          borderColor: '$error_100',
          color: '$error_100',
        },
      },
    },
    disabled: {
      true: {
        backgroundColor: '$base_10',
        borderColor: '$base_40',
        '&:hover': {
          borderColor: '$base_40',
        },
      },
    },
  },
})

export const DisplayValue = styled('div', {
  gridArea: '1 / 1 / 2 / 3',

  maxWidth: '100%',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  textAlign: 'left',
  whiteSpace: 'nowrap',
  boxSizing: 'border-box',

  color: '$base_80',

  '&:focus': {
    color: '$base_100',
  },

  variants: {
    placeholder: {
      true: {
        color: '$base_40',

        '&:focus': {
          color: '$base_40',
        },
      },
    },

    error: {
      true: {
        color: '$error_100',
      },
    },
  },
})

export const SelectContainer = styled('div', {
  '-webkit-box-align': 'center',
  'alignItems': 'center',
  display: 'grid',
  flex: '1 1 0%',
  flexWrap: 'wrap',

  position: 'relative',
  overflow: 'hidden',
  boxSizing: 'border-box',
})

export const SelectInputContainer = styled('div', {
  visibility: 'visible',
  flex: '1 1 auto',
  display: 'inline-grid',
  gridArea: '1 / 1 / 2 / 3',
  gridTemplateColumns: '0px min-content',
})

export const SelectInput = styled('input', {
  color: '$base_100',
  background: '0px center',
  opacity: 1,
  width: 'auto',
  gridArea: '1 / 2 / auto / auto',
  font: 'inherit',
  minWidth: '2px',
  border: '0px',
  margin: 0,
  outline: 0,
  padding: 0,

  '&:after': {
    content: 'attr(data-value) " "',
    visibility: 'hidden',
    whiteSpace: 'pre',
    gridArea: '1 / 2 / auto / auto',
    minWidth: '50px',
  },
})

export const ArrowDown = styled(Icon, {
  color: '$base_100',
  transition: 'transform 300ms cubic-bezier(0.87, 0, 0.13, 1)',

  variants: {
    open: {
      true: {
        transform: 'rotate(-180deg)',
      },
    },
  },
})

export const SelectOptions = styled('ul', {
  width: '100%',
  overflowY: 'auto',
  maxHeight: '250px',
  display: 'none',
  listStyle: 'none',
  marginTop: '$0',
  borderRadius: '5px',
  background: '$white',
  textAlign: 'left',

  position: 'relative',

  zIndex: 999,

  '-webkit-box-shadow': '$shadow_base',
  '-moz-box-shadow': '$shadow_base',
  boxShadow: '$shadow_base',

  '&::-webkit-scrollbar': {
    width: '8px',
  },

  '&::-webkit-scrollbar-track': {
    background: '$base_10',
    borderRadius: '50px',
  },

  '&::-webkit-scrollbar-thumb': {
    background: '$base_20',
    borderRadius: '50px',
  },

  variants: {
    expanded: {
      true: {
        display: 'block',
      },
    },
  },
})

export const NoOptionsWarning = styled('div', {
  margin: '$4',
  textAlign: 'center',
})

export const NoOptionsWarningText = styled('span', {
  fontFamily: 'Roboto',
  fontSize: '$p4',
})

export const WrapperIconLeft = styled('div', {
  paddingRight: '0.75rem',
  color: '$base_40',
  variants: {
    error: {
      true: {
        color: '$error_100',
      },
    },
    typed: {
      true: {
        color: '$primary_80',
      },
    },
    disabled: {
      true: {
        color: '$base_40',
      },
    },
  },
  compoundVariants: [
    {
      error: true,
      typed: true,
      css: { color: '$error_100' },
    },
  ],
})

export const Error = styled('span', {
  fontFamily: 'Roboto',
  fontStyle: 'normal',
  color: '$error_100',
})
