import React, { useState } from 'react'
import { useTrail, animated } from 'react-spring'
import { Container, TextField } from '../../styled/styled'

const Trail: React.FC<{ open: boolean }> = ({ open, children }) => {
  const items = React.Children.toArray(children)
  const trail = useTrail(items.length, {
    config: { mass: 5, tension: 2000, friction: 200, duration: 1000 },
    opacity: open ? 1 : 0,
    x: open ? 0 : 20,
    height: open ? 110 : 0,
    from: { opacity: 0, x: 20, height: 0 },
    loop: true
  })
  return (
    <Container fldir='column' juscontent='center'>
      {trail.map(({ height, ...style }, index) => (
        <animated.div key={index} style={style}>
          <animated.div style={{ height }}>{items[index]}</animated.div>
        </animated.div>
      ))}
    </Container>
  )
}

const Spinner = () => {
  const [open] = useState(true)
  return (
    <Container fldir='column' juscontent='center' style={{ height: '80vh', color: '#3f51b5' }}>
      <Trail open={open}>
        <TextField fontw='bold' size='4rem' transform='uppercase'>Please</TextField>
        <TextField fontw='bold' size='4rem' transform='uppercase'>Wait</TextField>
        <TextField fontw='bold' size='4rem' transform='uppercase'>Now</TextField>
        <TextField fontw='bold' size='4rem' transform='uppercase'>Loading</TextField>
      </Trail>
    </Container>
  )
}

export default Spinner
