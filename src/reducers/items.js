import {
  ITEMS__IS_LOADING,
  ITEMS__HAS_ERRORED,
  ITEMS__DELETE_ITEM,
  ITEMS__FETCH_DATA_SUCCESS } from '../actions/items';

export function itemsIsLoading(state = false, action) {
  switch (action.type) {
    case ITEMS__IS_LOADING:
      return action.isLoading;
    default:
      return state;
  }
}

export function itemsHasErrored(state = false, action) {
  switch (action.type) {
    case ITEMS__HAS_ERRORED:
      return action.hasErrored;
    default:
      return state;
  }
}

export function items(state = [], action) {
  switch (action.type) {
    case ITEMS__FETCH_DATA_SUCCESS:
      return action.items;
    case ITEMS__DELETE_ITEM:
      return state.filter(item => item.id !== action.itemId);
    default:
      return state;
  }
}
