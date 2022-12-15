import { styled } from '@otica/configs/stiches'

export const WrapperCards = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  width: '18.9375rem',
  height: '17.625rem',
  backgroundColor: '#FBFBFB',
  border: '0.1875rem solid #ABABAB',
  boxShadow: '-0.125rem 0.25rem 1.25rem #393030',
  borderRadius: '0.9375rem',
  '&:hover': {
    boxShadow: 'inset -0.125rem 0.25rem 1.875rem #393030',
  }
})

export const WrapperText = styled('div', {
  fontSize: '2.25rem',
  lineHeight: '2.75rem',
  fontWeight: '500',
  color: '#000000',
})

export const WrapperIcon = styled('div', {})

export const Container = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  gap: '11.5625rem',
  flexWrap: 'wrap',
  fontFamily: 'Roboto',
  '@xs': {
    gap: '1.5625rem',
  },
  '@lg': {
    gap: '11.5625rem',
  },
  '@md': {
    gap: '1.5625rem',
  },
  '@xl': {
    gap: '11.5625rem',
  },
})