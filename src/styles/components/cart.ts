import { styled } from '..'

export const CartContainer = styled('div', {
  position: 'fixed',
  right: 0,
  top: 0,
  bottom: 0,
  zIndex: 2,
  width: '30rem',

  backgroundColor: '$gray800',
  padding: '3rem',
  boxSizing: 'border-box',

  display: 'flex',
  flexDirection: 'column',
  gap: '2rem',

  header: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
})
