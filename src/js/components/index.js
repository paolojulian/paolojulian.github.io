import AppButton from './app-button';
import CardWithFrame from './card-w-frame';
import AppPill from './app-pill';
import ProgressBar from './progress-bar';

customElements.define('app-button', AppButton, { extends: 'button' });
customElements.define('app-pill', AppPill);
customElements.define('progress-bar', ProgressBar);
customElements.define('card-w-frame', CardWithFrame);
