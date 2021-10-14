import { Redirect } from 'react-router-dom';
import useTypeSelector from '../../hooks/usetypeSelector';

import { Container, TextField } from '../../styled/styled'

const Profile = () => {

  const { login } = useTypeSelector(state => state.auth)

  if (!login) {
    return <Redirect to='/registration' />
  }

  return (
    <Container fldir='column' juscontent='center' style={{ height: '80vh' }}>
      <TextField size='5rem' style={{ color: '#3f51b5' }}>
        This page is not ready yet &#128577;
      </TextField>
    </Container>
  )
}

export default Profile

