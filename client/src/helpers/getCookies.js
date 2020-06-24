export function getCookies() {
  const data = document.cookie.split(/; */);
  const values = {};
  // eslint-disable-next-line no-return-assign
  data.forEach((cookie) => (values[cookie.split('=')[0]] = cookie.split('=')[1]));

  return values;
}
