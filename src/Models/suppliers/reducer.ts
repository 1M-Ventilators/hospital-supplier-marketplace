import supplierData from './allSuppliers.json'
const allSuppliers = supplierData.data;

const supplierLookupById = allSuppliers.reduce(
  (accumulator, item) => {
    if (item.id) {
      accumulator[item.id] = item;
    }
    return accumulator;
  }, {}
);

const defaultState = {
  active: null,
  all: supplierLookupById,
  ordered: allSuppliers.map(({id}) => id)
};

export default function supplierReducer (state=defaultState, action: any) {
  switch(action.type) {
    default:
      return state;
  }
}
