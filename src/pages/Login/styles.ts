import { styled } from "@otica/configs/stiches";

export const InputContent = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  boxShadow: '0.1875rem 0.1875rem 0.1875rem 0.1875rem rgba(0, 0, 0, 0.5)',
  borderRadius: '0.3125rem 0.3125rem 0.3125rem 0.3125rem',
  width: '38.5625rem',
  height: '36.9375rem',
  fontFamily: 'Roboto',
  backgroundColor: '#F3F3F3',
})
export const Pstyled = styled('p', {
  display: 'flex',
  justifyContent: 'flex-start',
  ml: '-27.0625rem',
  mb: '-0.8125rem',
})
export const Pstyled2 = styled('p', {
  display: 'flex',
  justifyContent: 'flex-start',
  ml: '-27.4625rem',
  mb: '-0.8125rem',
})

export const InputWrapper = styled('div', {
  mt: '5rem',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  textAlign: 'center',
  marginY: 10,
  padding: '0 0.625rem',
  gap: '1.0625rem',
})


export const Input = styled('input', {
  width: '30.625rem',
  color: '#FFFFFF',
  height: '2.375rem',
  
})

export const LabelPass = styled('p', {
  fontFamily: 'Roboto',
  color: '$primary',
  ml: '1.4375rem',
  fontSize: '0.9375rem',
  lineHeight: '1.125rem',
  fontWeight: '500',
  cursor: 'pointer',
})

export const LabelBanner = styled('p', {
  fontSize: '3.125rem',
  fontWeight: '500',
  lineHeight: '4.5625rem',
})

export const WrapperContent = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '0.75rem'
})

export const IconWrapper = styled('div', {
  display: 'flex',
  mb: '3.875rem',
  color: '#BD0202'
})

export const ButtonWrapper = styled('div', {
  display: 'flex',
  mt: '1.5rem',
})

export const BannerWrapper = styled('div', {
  display: 'flex',
  backgroundColor: '$primary',
  width: '22.6875rem',
  height: '37.4375rem',
  color: '$white',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  fontSize: '1.5625rem',
  borderRadius: '0.625rem 0.625rem 0.625rem 0.625rem',
  mr: '-0.125rem'
})

export const Container = styled('div', {
  fontFamily: 'Roboto',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh',
})
