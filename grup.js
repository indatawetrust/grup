module.exports = (...params) => {

  let arr = params[0] || [],
      keys = params[1] || (arr.length ?
                            arr
                            .map(_ => _.split(' '))
                            .reduce((a,b) => a.concat(b))
                            .filter(_ => _.length) : []),
      _arr = {}

  for (let a of arr) {
    for (let k of keys) {
      k = k.trim()

      if (a.match(new RegExp(k.replace(/(\(|\)|\[|\]|\.|\*|\{|\}|\+|\?|\|)/g, "\\$1"), "igm"))) {
        _arr[k] = _arr[k] || []

        if (_arr[k].indexOf(a) === -1) _arr[k].push(a)
      }
    }
  }

  return _arr

}
