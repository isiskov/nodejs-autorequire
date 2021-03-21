module.exports = new Proxy({
    camelCase: (x) => { return x.replace(/\-([a-z])/gi, function(a,b) { return b.toUpperCase(); }); }
  }, {
  get: (target, prop, receiver) => {
    return target[prop] || (() => {
      if(typeof(prop) !== 'string') return target;
      return target[prop] = target[target.camelCase(prop)] = (() => {
        try {
          return require('./' + prop);
        } catch(err) {
          return require(prop);
        }
      })();
    })();
  },
});
