import { styled } from '@otica/configs/stiches'

export const WrapperCards = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  width: '303px',
  height: '282px',
  backgroundColor: '#FBFBFB',
  border: '3px solid #ABABAB',
  boxShadow: '-2px 4px 20px #393030',
  borderRadius: '15px',
  '&:hover': {
    boxShadow: 'inset -2px 4px 30px #393030',
  }
})

export const WrapperText = styled('div', {
  fontSize: '36px',
  lineHeight: '44px',
  fontWeight: '500',
  color: '#000000',
})

export const WrapperIcon = styled('div', {})

export const Container = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  gap: '185px',
  flexWrap: 'wrap',
  fontFamily: 'Roboto',
  '@xs': {
    gap: '25px',
  },
  '@lg': {
    gap: '185px',
  },
  '@md': {
    gap: '25px',
  },
  '@xl': {
    gap: '185px',
  },
})