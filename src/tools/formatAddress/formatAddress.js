export const formatAddress = (address) => {
  if (!address) return '';

  const lastIndex = address.length - 1;

  return address.slice(0, 4) + '...' + address.slice(lastIndex - 4, lastIndex);
};
