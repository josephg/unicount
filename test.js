const assert = require('assert')
const {strPosToUni, uniToStrPos} = require('.')

assert.strictEqual(strPosToUni('💃123', 2), 1)
assert.strictEqual(strPosToUni('💃123'), 4)

assert.strictEqual(uniToStrPos('💃123', 1), 2)
assert.strictEqual(uniToStrPos('💃123', 4), 5)


// Characters in the U+E000 - U+FFFF are treated as a single character
assert.strictEqual(strPosToUni('ﬀ123', 1), 1)
assert.strictEqual(strPosToUni('ﬀ123'), 4)

assert.strictEqual(uniToStrPos('ﬀ123', 1), 1)
assert.strictEqual(uniToStrPos('ﬀ123', 4), 4)
