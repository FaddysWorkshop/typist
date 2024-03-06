export default class Content extends Array {

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

};
