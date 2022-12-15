import { styled } from "@otica/configs";

export const Container = styled('div', {
  backgroundColor: '$primary',
  width: '100%',
  height: '4.3125rem',
  fontFamily: 'Roboto',
  color: 'white',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '1.0625rem',
})

export const Title = styled('p', {
  fontWeight: 400,
  fontSize: '1.25rem',
  lineHeight: '1.875rem',
})