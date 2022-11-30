import { styled } from "@otica/configs";

export const Container = styled('div', {
  backgroundColor: '#DF3434',
  width: '100%',
  height: '178px',
  fontFamily: 'Roboto',
})

export const WrapperHeader = styled('div', {
  color: 'white',
  display: 'flex',
  justifyContent: 'Space-between',
  alignItems: 'center',
  alignContent: 'center',
  mx: '36px',
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
  gap: '40px',
  mt: '23px',
})

export const PQuant = styled('p', {
  top: '39px',
  position: 'absolute',
  backgroundColor: 'white',
  width: '57.5px',
  height: '47.5px',
  border: '6px solid #DF3434',
  borderRadius: '15px',
  fontWeight: 700,
  color: '#DF3434',
  fontSize: '38px',
  lineHeight: '46px',
})

export const WrapperQuant = styled('div', {
  display: 'flex',
  flexDirection: 'column',
})
export const QuantiUp = styled('div', {
  display: 'flex',
  backgroundColor: 'white',
  width: '56.86px',
  height: '50.5px',
  borderRadius: '10px',
  fontWeight: 700,
  color: '#DF3434',
  fontSize: '38px',
  lineHeight: '46px',
  position: 'absolute',
  left: '144px',
  right: '22.68%',
  top: '32px',
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
  width: '160px',
  height: '42px',
  fontWeight: '900',
  fontSize: '45px',
  lineHeight: '54px',
})

export const PUsuario = styled('p', {
  fontWeight: '700',
  fontSize: '30px',
  lineHeight: '36px',
  display: 'flex',
})