import { styled } from '..'

export const HomeContainer = styled('main', {
  display: 'flex',
  width: '100%',
  maxWidth: 'calc(100vw - ((100vw - 1180px) / 2))',
  marginLeft: 'auto',
  minHeight: 656,
})

export const ProductBox = styled('div', {
  background: 'linear-gradient(180deg, #1EA483 0%, #7465D4 100%)',
  borderRadius: 8,
  cursor: 'pointer',
  position: 'relative',
  overflow: 'hidden',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  img: {
    objectFit: 'cover',
  },

  footer: {
    position: 'absolute',
    bottom: '0.25rem',
    left: '0.25rem',
    right: '0.25rem',

    borderRadius: 6,
    background: 'rgba(0,0,0,0.6)',
    padding: '2rem',
    transform: 'translateY(110%)',
    opacity: 0,
    transition: 'all 0.2s ease-in-out',

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',

    div: {
      display: 'flex',
      flexDirection: 'column',
      gap: '0.25rem',

      strong: {
        fontSize: '$lg',
        fontWeight: 'bold',
        color: '$gray100',
      },

      span: {
        fontSize: '$xl',
        fontWeight: 'bold',
        color: '$green400',
      },
    },

    button: {
      width: '3.5rem',
      height: '3.5rem',
      borderRadius: 6,
      backgroundColor: '$green500',
      border: 0,
      color: '$white',
      boxSizing: 'border-box',
      cursor: 'pointer',
      transition: 'background .2s',

      '&:not(:disabled):hover': {
        backgroundColor: '$green400',
      },
    },
  },

  '&:hover': {
    footer: {
      transform: 'translateY(0%)',
      opacity: 1,
    },
  },

  '&:last-child': {
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
  },
})
