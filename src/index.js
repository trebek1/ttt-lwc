import { buildCustomElementConstructor } from 'lwc';

import MyGame from 'my/game';

customElements.define('my-game', buildCustomElementConstructor(MyGame));
