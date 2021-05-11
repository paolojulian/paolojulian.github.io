import AppButton from './app-button';
import CardWithFrame from './app-card-w-frame';
import AppPill from './app-pill';

customElements.define('app-button', AppButton, { extends: 'button' });
customElements.define('app-pill', AppPill);
customElements.define('card-w-frame', CardWithFrame);
