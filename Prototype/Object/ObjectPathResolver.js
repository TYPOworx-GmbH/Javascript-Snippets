'use strict';

/**
 * usage: ({'foo': {'bar': 'any-value'}}).pathValue('foo.bar')
 * @param sPath
 * @returns {null}
 */
Object.prototype.pathValue = function(sPath) {
    let r = null, p = sPath.split('.'), ps = null;
    for (let i = 0; i < p.length+1; i++) {
      ps = p.shift();
      r = this.hasOwnProperty(ps)
        ? this[ps]
        : null
      ;
    }
    return r;
  };
