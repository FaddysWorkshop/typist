import Line from './line.js';
import { createInterface } from 'node:readline/promises';
import { createReadStream } from 'node:fs';
import { open } from 'node:fs/promises';

export default class File extends Array {

encoding = 'utf8';

constructor ( value ) {

super ();

Object .defineProperty ( this, 'path', { value } );

}

async $_producer () {

const file = this;
const { path, encoding } = file;

if ( path )
for await ( const content of createInterface ( {

input: createReadStream ( path )

} ) )

file .push ( content );

}

push ( content ) {

const file = this;

super .push ( new Line ( content ) );
this .index ();

}

unshift ( content ) {

super .unshift ( new Line ( content ) );
this .index ();

}

index () {

const file = this;
const { length: index } = this;

Object .defineProperty ( file, '$' + index, {

get () { return file [ index - 1 ] },
configurable: true

} );

}

$_director () {

const { path, length } = this;

return `${ path || 'New File' } ${ length } ${ length === 1 ? 'line' : 'lines' }`;

}

async [ '$:' ] ( $file, ... content ) {

const file = this;

file .unshift ( content );

return ( await $file ( 1 ) ) .resolution;

}

};
