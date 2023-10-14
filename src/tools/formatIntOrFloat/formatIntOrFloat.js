export const formatIntOrFloat = (value, prevValue) => {
  const regEx = /^[+-]?\d+(\.\d+)?$/;
  const onlyNumbers = /^[\d.]*$/;

  if (regEx.test(value) && (value[0] !== '0' || value.slice(0, 2) === '0.')) {
    return value;
  }

  if (value.split('.')[0][0] === '0' && value.split('.')[0].length > 1) {
    return prevValue;
  }

  if (value.split('.')[0] === '0' && prevValue === '0.' && !value.split('.')[1]) {
    return '';
  }

  if (value.split('.')[0] === '0' && regEx.test(value)) {
    return `${value}.`;
  }

  if (value.split('.').length === 2 && value.length > 1 && onlyNumbers.test(value)) {
    return value;
  }

  if (value.length === 0) {
    return '';
  }

  return prevValue;
};
