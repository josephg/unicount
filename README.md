# Unicode position conversion

This is a super simple no-deps conversion tool to convert between unicode codepoint offsets and JS string offsets.

This module exposes 3 methods:

#### uniCount(s: string) => number

Count the number of unicode codepoints inside a string. This is the equivalent of `string.length`, but this method returns a string's unicode length instead of its UCS2 length. (Who would ever want that?)

```javascript
const {uniCount} = require('unicount')

console.log('💃123'.length) // 5! Oh no!
console.log(uniCount('💃123')) // 4. Much better.
```


#### strPosToUni(s: string, strOffset?: number) => number

Convert from a JS string position to a unicode position.

For example, given the JS string `'💃123'`, JS string position 2 is right after the 💃. Since that emoji is a single code point wide, the unicode equivalent of that position is 1.

```javascript
const {strPosToUni} = require('unicount')

console.log(strPosToUni('💃123', 2)) // 1
```

The offset is optional. If missing, this method has the same behaviour as `uniCount(str)`, for backwards compatibility.


#### uniToStrPos(s: string, uniOffset: number) => number

Convert a unicode codepoint position to a string offset position

This function does the inverse of `strPosToUni`. Given a string `s` and a number of codepoints `uniOffset`, this returns the string position right after specified number of unicode codepoints.

```javascript
const {uniToStrPos} = require('unicount')

uniToStrPos.uniToStrPos('💃123', 1) // 2
```


# LICENSE

Copyright 2019 Joseph Gentle

Permission to use, copy, modify, and/or distribute this software for any purpose with or without fee is hereby granted, provided that the above copyright notice and this permission notice appear in all copies.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
