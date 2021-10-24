import React, { FC } from 'react'
import { useFindAndFilterActions } from '../../hooks/useActions'
import { Input, Label } from '../../styled/styled'

const Searchfield: FC = () => {

  const { findProduct } = useFindAndFilterActions();

  return (
    <Label
      size='1.5rem'
      margin='1rem'
    ><span>Search</span>
      <Input
        onChange={(e) => findProduct(e)}
        placeholder="Enter a search data"
      />
    </Label>
  )
}

export default Searchfield;
