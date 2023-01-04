import { styled } from "@otica/configs";

export const Container = styled('div', {
  backgroundColor: '$primary',
  width: '100%',
  height: '11.125rem',
  fontFamily: 'Roboto',
})

export const WrapperHeader = styled('div', {
  color: 'white',
  display: 'flex',
  justifyContent: 'Space-between',
  alignItems: 'center',
  alignContent: 'center',
  mx: '2.25rem',
})
export const WrapperUsuario = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
})
export const WrapperLeft = styled('div', {
  display: 'flex',
  flexDirection: 'column',
})
export const WrapperIconLeft = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  gap: '2.5rem',
  mt: '1.4375rem',
})

export const PQuant = styled('p', {
  top: '2.4375rem',
  position: 'absolute',
  backgroundColor: 'white',
  width: '3.5938rem',
  height: '2.9688rem',
  border: '0.375rem solid $primary',
  borderRadius: '0.9375rem',
  fontWeight: 700,
  color: '$primary',
  fontSize: '2.375rem',
  lineHeight: '2.875rem',
})

export const WrapperQuant = styled('div', {
  display: 'flex',
  flexDirection: 'column',
})
export const QuantiUp = styled('div', {
  display: 'flex',
  backgroundColor: 'white',
  width: '3.5537rem',
  height: '3.1563rem',
  borderRadius: '0.625rem',
  fontWeight: 700,
  color: '$primary',
  fontSize: '2.375rem',
  lineHeight: '2.875rem',
  position: 'absolute',
  left: '9rem',
  right: '22.68%',
  top: '2rem',
})

export const ButtonStyled = styled('button', {
  cursor: 'pointer',
  border: 'none',
  margin: 0,
  padding: 0,
  width: 'auto',
  overflow: 'visible',

  backgroundColor: 'transparent',

    /* inherit font & color from ancestor */
  color: 'inherit',
  font: 'inherit',

    /* Normalize `line-height`. Cannot be changed from `normal` in Firefox 4+. */
  lineHeight: 'normal',

    /* Corrects font smoothing for webkit */
  '-webkit-font-smoothing': 'inherit',
  '-moz-osx-font-smoothing': 'inherit',

    /* Corrects inability to style clickable `input` types in iOS */
  '-webkit-appearance': 'none',
})

export const PInicio = styled('p', {
  width: '100%',
  height: '2.625rem',
  fontWeight: '900',
  fontSize: '1.8125rem',
  lineHeight: '3.375rem',
})

export const PUsuario = styled('p', {
  fontWeight: '700',
  fontSize: '1.875rem',
  lineHeight: '2.25rem',
  display: 'flex',
})