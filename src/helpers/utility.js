import {message as msg} from 'antd';

export function convertNestedByArray(sourceObject, namespace) {
	const objectWithNamespace = {};
	const keys = Object.keys(sourceObject);

	for (let i = 0, len = keys.length; i < len; i++) {
		let key = keys[i];
		if (namespace) {
			objectWithNamespace[key] = [namespace, key];
		} else {
			objectWithNamespace[key] = key;
		}
	}

	return objectWithNamespace;
}

export const message = (type, message) => {
	msg[type](message);
}

export const changeValue = (e, actions) => {
	const target = e.target,
		value = target.value,
		dataset = target.dataset,
		type = dataset.type,
		key = dataset.key;

	actions(type, key, value);
}