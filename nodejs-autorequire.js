module.exports = new Proxy({
    camelCase: (x) => { return x.replace(/\-([a-z])/gi, function(a,b) { return b.toUpperCase(); }); }
  }, {
  get: (target, prop, receiver) => {
    return target[prop] || (function() {
      return target[prop] = target[target.camelCase(prop)] = (function() {
        try {
          return require('./' + prop);
        } catch(err) {
          return require(prop);
        }
      })();
    })();
  }
});
