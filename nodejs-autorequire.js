(function() {
  function camelCase(x) { return x.replace(/\-([a-z])/gi, function(a,b) { return b.toUpperCase(); }); };
  class NODE {
    constructor () {
      return new Proxy(this, this);
    }
    get (target, prop) {
      return this[prop] || (this[prop] = this[camelCase(prop)] = require(prop));
    }
  }
  module.exports = new NODE();
})();
