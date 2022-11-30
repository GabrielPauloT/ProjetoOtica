import { styled } from "@otica/configs/stiches";

export const Container = styled('div', {
})

export const CardsWrapper = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  minHeight: '100vh',

  '@lg': {
    minHeight: '74.3vh',
  },
})