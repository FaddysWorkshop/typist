import Content from './content.js';

export default class Line extends Content {

constructor ( content ) {

super ( ... ( 

(console .log ( content ),
content instanceof Array ) ? content : content .trim () .split ( /\s+/ ) ) );

}

$_director () {

return this .join ( ' ' );

}

};
