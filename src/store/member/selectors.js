import {createSelector} from 'reselect';

const indexSelector = {
  form: createSelector(
    state => state.member.index.get('form'),
    form => ({
      id: form.get('id'),
      userId: form.get('userId'),
      password: form.get('password'),
      name: form.get('name'),
      phone: form.get('phone'),
      address: form.get('address'),
      detailedAddress: form.get('detailedAddress'),
    })
  ),
  list: createSelector(
    state => state.member.index.get('list'),
    list => list.map(item => {
      item.key = item.id;
      return item;
    }).toJS(),
  ),
  addressVisible: createSelector(
    state => state.member.index.get('addressVisible'),
    addressVisible => addressVisible
  ),
  informationVisible: createSelector(
    state => state.member.index.get('informationVisible'),
    informationVisible => informationVisible
  ),
}

export {
  indexSelector,
}