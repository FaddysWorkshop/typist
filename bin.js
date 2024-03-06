#!/usr/bin/env node

import $ from './index.js';
import { createInterface } from 'node:readline';
import { stdin as input, stdout as output } from 'node:process';

const cli = createInterface ( { input, output } );

cli .on ( 'line', async line => {

console .log (

( await $ ( ... line .trim () .split ( /\s+/ ) ) ) .resolution || ''

);

cli .prompt ();

} );

cli .prompt ();
