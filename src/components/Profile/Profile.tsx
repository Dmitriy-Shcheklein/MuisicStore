import React from 'react'
import { Redirect } from 'react-router-dom'
import useTypeSelector from '../../hooks/usetypeSelector'

const Profile = () => {

  const { login } = useTypeSelector(state => state.auth)

  if (!login) {
    return <Redirect to='/registration' />
  }

  return (
    <div>
      PROFILE
    </div>
  )
}

export default Profile

