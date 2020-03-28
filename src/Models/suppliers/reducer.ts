import { SET_ACTIVE_SUPPLIER } from './actions';
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
    case SET_ACTIVE_SUPPLIER:
      return {
        ...state,
        active: action.payload && action.payload.id
      };
    // case SET_ACTIVE_BY_INDEX:
    //   const index = action.payload.index
    //   const supplierId = state.ordered[index]
    //   return {
    //     ...state,
    //     active: supplierId
    //   };
    default:
      return state;
  }
}
