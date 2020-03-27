export const SET_ACTIVE_SUPPLIER = 'SET_ACTIVE_SUPPLIER'
export const SET_ACTIVE_BY_INDEX = 'SET_ACTIVE_BY_INDEX'

export function setActiveSupplier(id: string) {
  return {
    type: SET_ACTIVE_SUPPLIER,
    payload: { id }
  };
}
export function discardActiveSupplier()  {
  return {
    type: SET_ACTIVE_SUPPLIER,
    payload: { id: null }
  }
}

export function setActiveSupplierByIndex(idx: number) {
  return {
    type: SET_ACTIVE_BY_INDEX,
    payload: { index: idx }
  };
}
