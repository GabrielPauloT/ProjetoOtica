import { styled } from '@otica/configs/stiches'
import { InputUncontrolled } from '@otica/InputUncontrolled'

import DatePicker from "react-datepicker";

export const WrapperContentSelect = styled('div', {
  display: 'flex',
  alignItems: 'end',
  justifyContent: 'end',
})

export const WrapperContent = styled('div', {
  gap: '25px',
  fontFamily: 'Roboto',
  fontWeight: '700',
  flexDirection: 'column',
  p: '20px',
  mt: '23px',
  ml: '16px',
  display: 'flex',
  backgroundColor: 'rgba(242, 242, 242, 0.7)',
})
export const WrapperInput = styled('div', {
  display: 'flex',
  flexDirection: 'column',
})
export const WrapperInputFour = styled('div', {
  gap: '25px',
  display: 'flex',
  flexDirection: 'row',
})
export const WrapperInputTwo = styled('div', {
  gap: '25px',
  display: 'flex',
  flexDirection: 'row',
})

export const BodyInputPrimary = styled(InputUncontrolled, {
  width: '500px',
})
export const BodyInputTelefone = styled(InputUncontrolled, {
  width: '300px',
})

export const Pstyled = styled('p', {
  mb: '10px',
})

export const DatePickerStyled = styled(DatePicker, {
  display: 'flex',
  alignItems: 'center',
  borderWidth: 1,
  border: '0.125rem solid #BD0202',
  backgroundColor: 'rgba(242, 242, 242, 0.7)',
  borderColor: '#A9A9A9',
  pl: '80px',
  justifyContent: 'center',
  width: '260px',
  height: '2.5rem',
  color: '#BD0202',
  boxSizing: 'border-box',
  cursor: 'pointer',
  outline: 'none',
  fontSize: '1rem',
  fontFamily: 'Roboto',
  fontWeight: 600,
  borderRadius: '0.3125rem',
})