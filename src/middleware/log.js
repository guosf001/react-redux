export default (store) => (next) => (action) => {
  console.log('logger中间件', store);
  return next(action);
};
