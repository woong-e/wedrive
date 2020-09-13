/**
 * Define Action Type & Action Creator
 */
const scope = 'MEMBER';
const actions = {
  //
  INITIALIZE_MEMBER  : `${scope}_INITIALIZE_MEMBER`,
  CHANGE_USER_ID     : `${scope}_CHANGE_USER_ID`,
  CHANGE_PASSWORD    : `${scope}_CHANGE_PASSWORD`,
  CHANGE_NAME        : `${scope}_CHANGE_NAME`,
  CHANGE_PHONE       : `${scope}_CHANGE_PHONE`,
  CHANGE_ADDRESS     : `${scope}_CHANGE_ADDRESS`,
  CHANGE_DETAILED_ADDRESS : `${scope}_CHANGE_DETAILED_ADDRESS`,
  ADDRESS_VISIBLE    : `${scope}_ADDRESS_VISIBLE`,
  INFORMATION_VISIBLE: `${scope}_INFORMATION_VISIBLE`,

  JOIN               : `${scope}_JOIN`,
  FETCH_LIST       	 : `${scope}_FETCH_LIST`,
  FETCH_LIST_SUCCESS : `${scope}_FETCH_LIST_SUCCESS`,
  FETCH       	     : `${scope}_FETCH`,
  FETCH_SUCCESS      : `${scope}_FETCH_SUCCESS`,
  MODIFY             : `${scope}_MODIFY`,
  REMOVE             : `${scope}_REMOVE`,

  initialize: () => ({
    type: actions.INITIALIZE_MEMBER
  }),

  changeValue: (type, key, value) => ({
    type,
    key,
    value
  }),

  changeAddress: (value) => ({
    type: actions.CHANGE_ADDRESS,
    value
  }),

  addressVisible: (value) => ({
    type: actions.ADDRESS_VISIBLE,
    value
  }),

  informationVisible: (value) => ({
    type: actions.INFORMATION_VISIBLE,
    value
  }),

  join: (joinInfo) => ({
    type: actions.JOIN,
    joinInfo
  }),

  fetchList: () => ({
    type: actions.FETCH_LIST,
  }),

  fetchListSuccess: (payload) => ({
    type: actions.FETCH_LIST_SUCCESS,
    payload,
  }),

  fetch: (id) => ({
    type: actions.FETCH,
    id
  }),

  fetchSuccess: (payload) => ({
    type: actions.FETCH_SUCCESS,
    payload,
  }),

  modify: (form) => ({
    type: actions.MODIFY,
    form,
  }),

  remove: (id) => ({
    type: actions.REMOVE,
    id
  }),
}

export default actions
export {
  scope
}