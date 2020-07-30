import isObject from 'underscore/isObject';
import isString from 'underscore/isString';

const store = window.localStorage;

function get(key) {
  const value = store.getItem(key);
  if (value && isString(value)) {
    try {
      return JSON.parse(value);
    } catch (e) {
      // do nothing
    }
  }
  return value;
}

function set(key, value) {
  if (value && isObject(value)) {
    value = JSON.stringify(value);
  }
  store.setItem(key, value);
}

export function getItem(key, defaultValue) {
  return get(key) || defaultValue;
}

export function setItem(key, value) {
  return set(key, value);
}

export default {
  getItem,
  setItem,
};
