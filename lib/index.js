/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

/**
* Maximum Unicode code point.
*
* @module @stdlib/constants-unicode-max
* @type {integer32}
*
* @example
* var UNICODE_MAX = require( '@stdlib/constants-unicode-max' );
* // returns 1114111
*/


// MAIN //

/**
* Maximum Unicode code point.
*
* @constant
* @type {integer32}
* @default 1114111
* @see [Unicode]{@link https://en.wikipedia.org/wiki/Unicode}
*/
var UNICODE_MAX = 0x10FFFF|0; // asm type annotation


// EXPORTS //

module.exports = UNICODE_MAX;
