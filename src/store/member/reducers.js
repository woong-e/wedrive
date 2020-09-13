import {combineReducers} from "redux";
import {Map, List} from 'immutable'

import actions from './actions';
import {convertNestedByArray} from "../../helpers/utility";

/**
 * Set Initial State
 */
const initForm = Map({
  userId: '',
  password: '',
  name: '',
  phone: '',
  address: '',
  detailedAddress: '',
});

const initIndexState = Map({
  form: Map().merge(initForm),
  list: List(),
  addressVisible: false,
  informationVisible: false,
});

const form = convertNestedByArray(initIndexState.get('form').toJS(), 'form');

/**
 * Define Reducer
 */
export function indexReducer(state = initIndexState, action) {
  switch (action.type) {
    //
    case actions.INITIALIZE_MEMBER:
      return applyInitialize(state);

    case actions.CHANGE_USER_ID:
      return applyChangeValue(state, action);

    case actions.CHANGE_PASSWORD:
      return applyChangeValue(state, action);

    case actions.CHANGE_NAME:
      return applyChangeValue(state, action);

    case actions.CHANGE_PHONE:
      return applyChangeValue(state, action);

    case actions.CHANGE_ADDRESS:
      return applyChangeAddress(state, action);

    case actions.CHANGE_DETAILED_ADDRESS:
      return applyChangeValue(state, action);

    case actions.ADDRESS_VISIBLE:
      return applyChangeAddressVisible(state, action);

    case actions.INFORMATION_VISIBLE:
      return applyChangeInformationVisible(state, action);

    case actions.FETCH_LIST_SUCCESS:
      return applyFetchListSuccess(state, action);

    case actions.FETCH_SUCCESS:
      return applyFetchSuccess(state, action);

    default:
      return state;
  }
}

/**
 * Define Reducer Pure function
 */
function applyInitialize(state) {
  return state.set('form', Map().merge(initForm));
}

function applyChangeValue(state, action) {
  return state.setIn(form[action.key], action.value);
}

function applyChangeAddress(state, action) {
  return state.setIn(form.address, action.value);
}

function applyChangeAddressVisible(state, action) {
  return state.set('addressVisible', action.value);
}

function applyChangeInformationVisible(state, action) {
  return state.set('informationVisible', action.value);
}

function applyFetchListSuccess(state, action) {
  return state.set('list', List().merge(action.payload));
}

function applyFetchSuccess(state, action) {
  return state.set('form', Map().merge(action.payload));
}

export default combineReducers({
  index: indexReducer,
});