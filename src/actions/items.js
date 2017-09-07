export const ITEMS__IS_LOADING = 'items__is_loading';
export const ITEMS__HAS_ERRORED = 'items__is_errored';
export const ITEMS__DELETE_ITEM = 'items__delete_item';
export const ITEMS__FETCH_DATA_SUCCESS = 'items__fetch_data_success';

export function itemsHasErrored(hasErrored) {
  return {
    type: ITEMS__HAS_ERRORED,
    hasErrored
  };
}

export function itemsIsLoading(isLoading) {
  return {
    type: ITEMS__IS_LOADING,
    isLoading
  };
}

export function itemsFetchDataSuccess(items) {
  return {
    type: ITEMS__FETCH_DATA_SUCCESS,
    items
  };
}

export function itemsDeleteItem(itemId) {
  return {
    type: ITEMS__DELETE_ITEM,
    itemId
  };
}

export function errorAfterFiveSeconds() {
  // We return a function instead of an action object
  return (dispatch) => {
    setTimeout(() => {
      // This function is able to dispatch other action creators
      dispatch(itemsHasErrored(true));
    }, 5000);
  };
}

export function itemsFetchData(url) {
  return (dispatch) => {
    dispatch(itemsIsLoading(true));
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        dispatch(itemsIsLoading(false));
        return response;
      })
      .then((response) => response.json())
      .then((items) => dispatch(itemsFetchDataSuccess(items)))
      .catch(() => dispatch(itemsHasErrored(true)));
  };
}
