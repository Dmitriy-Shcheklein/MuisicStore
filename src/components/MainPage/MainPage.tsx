import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';
import { useSpring, animated } from '@react-spring/web';

// const useStyles = makeStyles({
//   root: {
//     fontSize: '3rem',
//     display: 'flex',
//     flexDirection: 'column',
//     justifyContent: 'center',
//     alignItems: 'center',
//     height: '80vh',
//     '& a': {
//       color: '#3f51b5',
//     }
//   }
// })

const MainPage: FC = () => {

  const styles = useSpring({
    config: {
      duration: 1500,
    },
    from: { opacity: 0, color: '#3f51b5' },
    to: { opacity: 1, color: '#3f51b5' },
  })

  const stylesRef = useSpring({
    config: {
      duration: 1500,
    },
    from: { opacity: 1, transform: 'translateY(100vh)' },
    to: { opacity: 1, transform: 'translateY(0rem)' },
  })

  return (
    <div
    // className={classes.root}
    >
      <div >
        <animated.div style={styles}>
          <h1 >Welcome to MusicShop</h1>
        </animated.div>

      </div>
      <div>
        <animated.div style={stylesRef}>
          <NavLink to="/albums">Let's start shopping</NavLink>
        </animated.div>
      </div>
    </div>
  )
}

export default MainPage;

