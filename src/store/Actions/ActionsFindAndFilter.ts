import { FindAndFilterTypes } from "../../types/findAndFilterTypes"

const findProduct = (e: React.ChangeEvent<HTMLInputElement>) => {
  return ({
    type: FindAndFilterTypes.FIND_PRODUCT,
    payload: e.target.value,
  })
}

export {
  findProduct,
}