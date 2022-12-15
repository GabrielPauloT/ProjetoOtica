import { styled } from '@otica/configs/stiches'

export const InputContainer = styled('div', {
  width: '30.625rem',
  height: '2.5rem',
  display: 'inline-flex',
  borderRadius: '0.3125rem',
  lineHeight: '150%',
  borderWidth: 1,
  border: '0.125rem solid #BD0202',
  borderColor: '#A9A9A9',
  padding: '0rem 0rem 0rem 0.7rem',
  boxSizing: 'border-box',
  '&:hover': {
    borderColor: '$primary_80',
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
export const Input = styled('input', {
  color: '#BD0202',
  height: '100%',
  width: '100%',
  boxSizing: 'border-box',
  outline: 'none',
  fontSize: '1rem',
  fontFamily: 'Roboto',
  fontWeight: 600,
  backgroundColor: 'transparent',
  border: 'none',
  '&::placeholder': {
    color: '#A9A9A9',
    fontSize: '1.125rem',
  },
  '&:focus': {
    outline: 'none',
    color: '#BD0202',
  },
  variants: {
    error: {
      true: {
        border: 'none',
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
  },
})
export const InputSpan = styled('span', {
  fontFamily: 'Roboto',
  fontStyle: 'normal',
  color: '$error_100',
})
export const WrapperIconLeft = styled('div', {
  backgroundColor: '#BD0202',
  height: '1.5625rem',
  mr: '0.5rem',
  mt: '0.375rem',
  color: '$white',
  variants: {
    error: {
      true: {
        color: '$error_100',
      },
    },
    typed: {
      true: {
        color: '$white',
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

export const MainDiv = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
})
