export const mapStateToProps = (...rest) => (state) => {
  if (rest.length) {
    const data = {};
    rest.forEach((name) => {
      state[name] ? (data[name] = state[name]) : (data[name] = 'Not found in state');
    });
    return { ...data };
  }

  return { state };
};
// state[name] ? { [name]: state[name] } : { state };
