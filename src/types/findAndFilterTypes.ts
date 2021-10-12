export enum FindAndFilterTypes {
  FIND_PRODUCT = 'FIND_PRODUCT'
};

export interface FindAndFilterState {
  productName: string
}

export interface FindProduct {
  type: FindAndFilterTypes.FIND_PRODUCT,
  payload: string,
}

export type FindAndFilterActions = FindProduct;