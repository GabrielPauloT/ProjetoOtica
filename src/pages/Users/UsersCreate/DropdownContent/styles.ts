import { Icon } from '@otica/components'
import { CustomSelect } from '@otica/components/Select'
import { styled } from '@otica/configs/stiches'

export const WrapperContent = styled('div', {
  fontFamily: 'Roboto',
  mr: '25px',
})

export const WrapperDropdown = styled('div', {
  mt: '0.5rem',
})

export const DropdownButton = styled('button', {
  all: 'unset',
  border: '1px solid $base_60',
  borderRadius: '0.25rem',
  height: 56,
  width: 296,
  display: 'inline-flex',
  alignItems: 'center',
  color: '#A9A9A9',
  '@xs': {
    width: '48vh',
  },
  '@lg': {
    width: 296,
  },
})

export const CustomSelectStyled = styled(CustomSelect, {
  variants: {
    variant: {
      neg: {
        color: '$base_100',
      },
    },
  },
})

export const TextDropdown = styled('div', {
  display: 'inline-flex',
  fontFamily: 'Roboto',
  fontWeight: '600',
  fontSize: '1rem',
  lineHeight: '150%',
  ml: '1.5rem',
  width: '100%',

  variants: {
    variant: {
      neg: {
        color: '$base_100',
      },
    },
  },
})

export const StyledH3 = styled('h3', {
  display: 'flex',
  fontWeight: '700',
  fontSize: '1rem',
  lineHeight: '150%',
})

export const IconStyled = styled(Icon, {
  mr: '1.125rem',
})
