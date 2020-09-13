import {combineReducers} from "redux";
import {Map} from 'immutable'

import actions from './actions';
import {convertNestedByArray} from "../../helpers/utility";

/**
 * Set Initial State
 */
const initForm = Map({
  collapsed: false,
  current: [],
});

const initIndexState = Map({
  form: Map().merge(initForm),
});

const form = convertNestedByArray(initIndexState.get('form').toJS(), 'form');

/**
 * Define Reducer
 */
export function indexReducer(state = initIndexState, action) {
  switch (action.type) {
    //
    case actions.CHANGE_COLLAPSED:
      return applyChangeCollapsed(state);

    case actions.CHANGE_CURRENT:
      return applyChangeCurrent(state, action);

    default:
      return state;
  }
}

/**
 * Define Reducer Pure function
 */
function applyChangeCollapsed(state) {
  const collapsed = state.getIn(form.collapsed);
  return state.setIn(form.collapsed, !collapsed);
}

function applyChangeCurrent(state, action) {
  return state.setIn(form.current, action.current);
}

export default combineReducers({
  index: indexReducer,
});