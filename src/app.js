 // app.js
import { LitElement, html } from 'lit';
import { Router } from '@lit-labs/router';
import {HomePage} from './my-element.js'
import {ArchivePage} from './archive-elements.js'

export class MyApp extends LitElement {
  router = new Router(this, [
    {
      path: '/',
      render: () => html`<home-page></home-page>`
    },
    {
      path: '/archive',
      render: () => html`<archive-page></archive-page>`
    }
  ]);

  render() {
    return this.router.outlet();
  }
}
customElements.define('my-app', MyApp);