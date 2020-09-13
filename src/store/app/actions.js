/**
 * Define Action Type & Action Creator
 */
const scope = 'WEDRIVE';
const actions = {
  //
  CHANGE_COLLAPSED: `${scope}_CHANGE_COLLAPSED`,
  CHANGE_CURRENT: `${scope}_CHANGE_CURRENT`,

  changeCollapsed: () => ({
    type: actions.CHANGE_COLLAPSED,
  }),

  changeCurrent: (current) => ({
    type: actions.CHANGE_CURRENT,
    current
  })
}

export default actions
export {
  scope
}