import { motion } from 'framer-motion'
import { LoaderContainer } from '../styles/components/loader'

const icon = {
  hidden: {
    opacity: 0,
    pathLength: 0,
    stroke: 'transparent',
  },
  visible: {
    opacity: 1,
    pathLength: 1,
    stroke: 'rgba(0, 179, 126, 0.5)',
  },
}

export function Loader() {
  return (
    <LoaderContainer>
      <motion.svg
        width="297"
        height="297"
        viewBox="0 0 297 297"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.path
          opacity="0.5"
          d="M296.928 2.00531L224.261 273.336C223.892 274.568 222.414 274.937 221.552 274.075L172.902 225.425L209.358 89.4519C209.728 88.2203 208.619 87.1118 207.388 87.4813L71.4144 123.938L23.0109 75.5344C22.1487 74.6722 22.5182 73.1942 23.7499 72.8247L294.957 0.0346846C296.189 -0.211644 297.298 0.896834 296.928 2.00531Z"
          variants={icon}
          initial="hidden"
          animate="visible"
          transition={{
            default: {
              duration: 2,
              ease: 'easeInOut',
              repeat: Infinity,
              repeatType: 'reverse',
            },
            stroke: { duration: 2, ease: [1, 0, 0.8, 1] },
          }}
        />
        <motion.path
          opacity="0.5"
          d="M172.9 225.426L154.179 295.629C153.809 296.861 152.331 297.231 151.469 296.368L0.469868 145.492C-0.392281 144.63 -0.0227906 143.152 1.20885 142.783L71.4125 123.939L172.9 225.426Z"
          variants={icon}
          initial="hidden"
          animate="visible"
          transition={{
            default: {
              duration: 2,
              ease: 'easeInOut',
              repeat: Infinity,
              repeatType: 'reverse',
            },
            stroke: { duration: 2, ease: [1, 0, 0.8, 1] },
          }}
        />
        <motion.path
          d="M209.358 89.4508L172.901 225.424L71.4139 123.937L207.387 87.4801C208.619 87.1107 209.727 88.2191 209.358 89.4508Z"
          variants={icon}
          initial="hidden"
          animate="visible"
          transition={{
            default: {
              duration: 2,
              ease: 'easeInOut',
              repeat: Infinity,
              repeatType: 'reverse',
            },
            stroke: { duration: 2, ease: [1, 0, 0.8, 1] },
          }}
        />
      </motion.svg>
    </LoaderContainer>
  )
}
