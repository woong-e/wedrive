import {createSelector} from 'reselect';

const indexSelector = {
  form: createSelector(
    state => state.app.index.get('form'),
    form => ({
      collapsed: form.get('collapsed'),
      current: form.get('current'),
    })
  )
}

export {
  indexSelector,
}