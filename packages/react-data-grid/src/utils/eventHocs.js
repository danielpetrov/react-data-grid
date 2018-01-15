import _ from 'underscore';

function throttleEventHandler(...args) {
  const throttled = _.throttle(...args);
  return function(e) {
    e.persist();
    return throttled(e);
  };
}

module.exports = {
  throttleEventHandler
};
