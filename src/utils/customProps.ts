import { TGetParam, TSetParam } from './types';

const rootEl = document.getElementById('root');

const get: TGetParam = (param, el = rootEl) => {
  if (!el || !el.style || !el.style.getPropertyValue) return null;
  const val = el.style.getPropertyValue('--'+param);
  if (val === '') return null;

  const tryParseToNumber = parseInt(val, 10);
  if (!Number.isNaN(tryParseToNumber)) return tryParseToNumber;
  if (val === 'false') return false;
  if (val === 'true') return true;
  return val;
}

const set: TSetParam = (param, value, el = rootEl) => {
  if (!el || !el.style || !el.style.setProperty) return false;
  el.style.setProperty('--'+param, ''+value);
  return true;
};

export { get, set };
