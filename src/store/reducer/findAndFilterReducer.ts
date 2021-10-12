import { FindAndFilterActions, FindAndFilterState, FindAndFilterTypes } from "../../types/findAndFilterTypes";

const initialState: FindAndFilterState = {
  productName: '',
}

const findAndFilterReducer = (state: FindAndFilterState = initialState, action: FindAndFilterActions): FindAndFilterState => {

  switch (action.type) {
    case FindAndFilterTypes.FIND_PRODUCT:
      return {
        productName: action.payload,
      }
    default:
      return state;
  }
}

export {
  findAndFilterReducer,
}