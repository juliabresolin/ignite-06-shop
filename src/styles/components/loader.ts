import { styled } from '..'

export const LoaderContainer = styled('div', {
  width: '100%',
  position: 'fixed',
  inset: 0,
  zIndex: 99,
  background: '$gray900',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  svg: {
    maxWidth: 100,
  },
})
