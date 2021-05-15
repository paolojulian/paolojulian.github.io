import AppButton from './app-button';
import AppCard from './app-card';
import AppPill from './app-pill';
import CardWithFrame from './card-w-frame';
import ProgressBar from './progress-bar';

customElements.define('app-button', AppButton, { extends: 'button' });
customElements.define('app-card', AppCard);
customElements.define('app-pill', AppPill);
customElements.define('card-w-frame', CardWithFrame);
customElements.define('progress-bar', ProgressBar);
