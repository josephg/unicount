const assert = require('assert')
const {strPosToUni, uniToStrPos} = require('.')

assert.strictEqual(strPosToUni('💃123', 2), 1)
assert.strictEqual(strPosToUni('💃123'), 4)

assert.strictEqual(uniToStrPos('💃123', 1), 2)
assert.strictEqual(uniToStrPos('💃123', 4), 5)
