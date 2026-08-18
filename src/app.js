 // app.js
import { LitElement, css, html } from 'lit'
import { Router } from '@lit-labs/router';
import { HeaderPart } from './header-elements';
import { MainPart } from './main-element';
import { ArcadeWidget } from './arcade-widget';
import { ArchivePage } from './archive-elements';
import { HashRouter } from './HashRouter.js';

/**
 * Home Page
 */
export class HomePage extends LitElement {
  static properties = {
    activeSection: { type: String }
  };

  constructor() {
    super();
    this.activeSection = window.location.hash || '#about'; 
  }
  
  static styles = 
    css`
    #main-container {
      width: 100%;
      height: 100%;
      margin: 0 auto;
      max-width: 1280px;
    }

    @media (min-width: 1024px) {
      #main-container {
        display: flex;
        justify-content: space-between;
        gap: 16px;
      }
    }
    `;
  
  _handleNavClick(e) {
    const sectionId = e.detail.section;
    // Find the main-part component
    const mainPart = this.shadowRoot.querySelector('main-part');
    if (mainPart) {
      mainPart.scrollToSection(sectionId);
    }
  }

  _handleSectionChange(e) {
    this.activeSection = e.detail.section;
    history.replaceState(null, null, this.activeSection);
  }

  render() {
    return html`
        <div id="main-container">
          <header-part .activeSection="${this.activeSection}" @nav-link-clicked="${this._handleNavClick}">></header-part>
          <main-part @section-changed="${this._handleSectionChange}"></main-part>
        </div>
    `;
  }
}
customElements.define('home-page', HomePage);



export class MyApp extends LitElement {
    constructor() {
        super();
        this.router = new HashRouter(this, [
            {path: '/', render: () => html`<home-page></home-page>` },
            {path: '/archive', render: () => html`<archive-page></archive-page>`},
            {path: '(.*)', render: () => html`<home-page></home-page>`}
        ]);
    }
    render() {
        return this.router.outlet();
    }
}
customElements.define('my-app', MyApp);