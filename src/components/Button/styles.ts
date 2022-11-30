import { styled } from '@otica/configs/stiches'

export const ContainerButton = styled('button', {
  fontSize: '$p3',
  height: '2.4rem',
  lineBreak: 'auto',
  width: '14rem',
  justifyContent: 'center',
  alignItems: 'center',
  display: 'flex',
  fontFamily: 'Roboto',
  color: 'white',
  transition: '0.3s',
  borderRadius: 5,
  borderWidth: 0,
  cursor: 'pointer',
  backgroundColor: '#BD0202',
  '&:hover': {
    backgroundColor: '$primary_80',
  },
  '&:active': {
    backgroundColor: '$primary_100',
  },
  '&:disabled': {
    color: '$base_40',
    backgroundColor: '$base_20',
    boxShadow: '0 0 0 1px $colors$base_40',
    cursor: 'default',
    pointerEvents: 'none',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
  },
  variants: {
    // Button Sizes
    dimension: {
      xsmall: {
        fontSize: '$p5',
        height: '2.25rem',
        width: '6.25rem',
      },
      small: {
        fontSize: '$p4',
        height: '2.438rem',
        width: '7.5rem',
      },
      medium: {
        fontSize: '$p3',
        height: '3rem',
        width: '9rem',
      },
      large: {
        fontSize: '$p2',
        height: '3.75rem',
        width: '10.813rem',
      },
    },
    // Button Types
    variant: {
      outlined: {
        $$mainColor: 'transparent',
        color: '$primary_100',
        borderColor: '$primary_100',
        borderWidth: 2,
        boxShadow: '0 0 0 1px $$mainColor',
        backgroundColor: 'transparent',
        borderStyle: 'solid',
        '&:hover': {
          boxShadow: '0 0 0 0.5px $$mainColor',
          color: 'white',
          backgroundColor: '$primary_100',
        },
        '&:active': {
          backgroundColor: '$colors$primary_80',
          borderColor: '$$mainColor',
          boxShadow: '0 0 0 1px $$mainColor',
        },
      },

      iconTextButton: {
        backgroundColor: 'transparent',
        display: 'flex',
        justifyItems: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        width: 'auto',
        height: 'auto',
        color: '$base_40',
        '&:hover': {
          backgroundColor: 'transparent',
        },
      },

      rounded: {
        border: 'none',
        borderRadius: 'auto',
        justifyContent: 'center',
        alignItems: 'center',
        display: 'flex',
      },
    },

    color: {
      primary: {
        color: 'white',
        borderColor: '$primary_100',
        backgroundColor: '$primary_100',
        '&:hover': {
          backgroundColor: '$primary_60',
          boxShadow: '0 0 0 0.5px $$mainColor',
          color: 'white',
        },
        '&:active': {
          backgroundColor: '$primary_100',
          borderColor: '$primary_100',
          boxShadow: '0 0 0 1px $primary_100',
        },
      },
      secondary: {
        color: 'white',
        borderColor: '$secondary_80',
        backgroundColor: '$secondary_80',
        '&:hover': {
          backgroundColor: '$colors$secondary_60',
        },
        '&:active': {
          backgroundColor: '$secondary_80',
        },
      },
      danger: {
        color: 'white',
        borderColor: '$error_100',
        backgroundColor: '$error_100',
        '&:hover': {
          backgroundColor: '$colors$error_80',
        },
        '&:active': {
          backgroundColor: '$error_100',
        },
      },
      success: {
        color: 'white',
        borderColor: '$success_100',
        backgroundColor: '$success_100',
        '&:hover': {
          backgroundColor: '$colors$success_80',
        },
        '&:active': {
          backgroundColor: '$success_100',
        },
      },
    },
  },

  compoundVariants: [
    {
      variant: 'outlined',
      color: 'secondary',
      css: {
        $$mainColor: '$secondary_80',
        backgroundColor: 'transparent',
        color: '$secondary_80',
        borderColor: '$secondary_80',
        '&:hover': {
          backgroundColor: '$colors$secondary_80',
          borderColor: '$secondary_60',
        },
        '&:active': {
          backgroundColor: '$colors$secondary_60',
          borderColor: '$secondary_60',
        },
      },
    },
    {
      variant: 'outlined',
      color: 'primary',
      css: {
        $$mainColor: '$primary_100',
        backgroundColor: 'transparent',
        color: '$primary_100',
        '&:hover': {
          backgroundColor: '$colors$primary_100',
        },
        '&:active': {
          backgroundColor: '$colors$primary_80',
          color: 'white',
          borderColor: 'white',
        },
      },
    },
    {
      variant: 'outlined',
      color: 'danger',
      css: {
        $$mainColor: '$error_100',
        backgroundColor: 'transparent',
        color: '$error_100',
        '&:hover': {
          backgroundColor: '$colors$error_100',
        },
        '&:active': {
          backgroundColor: '$colors$error_100',
          color: 'white',
          borderColor: 'white',
        },
      },
    },
    {
      variant: 'outlined',
      color: 'success',
      css: {
        $$mainColor: '$success_100',
        backgroundColor: 'transparent',
        color: '$success_100',
        '&:hover': {
          backgroundColor: '$colors$success_100',
        },
        '&:active': {
          backgroundColor: '$colors$success_100',
          color: 'white',
          borderColor: 'white',
        },
      },
    },
  ],
})

export const WrapperIconLeft = styled('div', {
  display: 'flex',
  justifyItems: 'center',
  alignItems: 'center',
  paddingRight: '0.75rem',
})
export const WrapperIconRight = styled('div', {
  display: 'flex',
  justifyItems: 'center',
  alignItems: 'center',
  paddingLeft: '0.75rem',
})

export const WrapperIconCenter = styled('div', {
  display: 'flex',
  justifyItems: 'center',
  alignItems: 'center',
  flexDirection: 'column',
})

export const SpanText = styled('span', {
  'white-space': 'nowrap',
  overflow: 'hidden',
  'text-overflow': 'ellipsis',
})
