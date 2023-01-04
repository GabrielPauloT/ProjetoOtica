import { styled } from '@otica/configs/stiches'

export const Option = styled('li', {
  padding: '$2',

  cursor: 'pointer',
  fontSize: '$p4',
  fontFamily: 'Roboto',
  color: '$base_100',
  fontWeight: 600,
  userSelect: 'none',
  borderRadius: 4,
  outline: 'none',
  '&:hover': {
    background: '$primary_10',
  },

  '&:active': {
    background: '$primary_10',
  },

  '&:focus': {
    background: '$primary_10',
  },

  variants: {
    selected: {
      true: {
        background: '$primary_20',

        '&:focus': {
          background: '$primary_20',
        },
      },
    },
  },
})
