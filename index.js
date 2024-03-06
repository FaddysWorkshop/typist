import Scenarist from '@faddys/scenarist';
import File from './file.js';

export default await Scenarist ( new File ( process .argv .slice ( 2 ) [ 0 ] ) );
