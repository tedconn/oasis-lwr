/**
 * Copyright (c) 2020, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */
const fs = require('fs');

const source = 'node_modules/@salesforce/oasis/lib/umd/oasis.js';
const destination = 'src/public/assets/js/oasis.js';

const sourceMap = 'node_modules/@salesforce/oasis/lib/umd/oasis.js.map';
const destinationMap = 'src/public/assets/js/oasis.js.map';

fs.createReadStream(source).pipe(fs.createWriteStream(destination));
fs.createReadStream(sourceMap).pipe(fs.createWriteStream(destinationMap));
