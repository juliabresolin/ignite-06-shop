import { styled } from '..'

export const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  justifyContent: 'center',
  minHeight: '100vh',
})

export const Header = styled('header', {
  padding: '2rem 0',
  width: '100%',
  maxWidth: 1180,
  margin: '0 auto',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',

  button: {
    padding: '0.75rem',
    backgroundColor: '$gray800',
    borderRadius: 6,
    border: 0,
    display: 'block',
    cursor: 'pointer',
    transition: 'opacity .2s',
    position: 'relative',

    '&:not(:disabled):hover': {
      opacity: 0.75,
    },

    '&:disabled': {
      cursor: 'not-allowed',
    },

    svg: {
      color: '$gray600',
    },

    div: {
      width: '1.5rem',
      height: '1.5rem',
      borderRadius: '50%',
      backgroundColor: '$green500',
      color: '$white',
      border: '3px solid $gray900',

      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',

      position: 'absolute',
      top: '-25%',
      right: '-25%',
    },
  },
})
