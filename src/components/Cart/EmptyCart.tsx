import { FC } from 'react'
import { Container, TextField } from '../../styled/styled'

const EmptyCart: FC = () => {
  return (

    <Container fldir='column' juscontent='center' style={{ height: '80vh' }}>
      <TextField size='5rem' style={{ color: '#3f51b5' }}>
        You have not selected anything<br />
        Cart is empty &#128561;
      </TextField>
    </Container>

  )
}

export default EmptyCart
