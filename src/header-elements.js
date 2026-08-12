import { LitElement, css, html } from 'lit'
import { icons } from './icons.js';
import {sections,socials,experiences,education,projects} from './data.js'

/**
 * THE Main title Eleemnt.
 */
export class NameHeader extends LitElement {

  static properties = {
    name: { type: String },
    url: { type: String }
  };

  static styles = css`
    a {
      color: var(--slate-200);
      cursor: pointer;
      font-size: 2.5rem;
      font-weight: 700;
      letter-spacing: -1.2px;
      line-height: 2.5rem;
      text-decoration: none;
      display: block;
    }

    /* Tablet Styles */
    @media (min-width: 768px) {
      a {
        font-size: 2.6rem;
        line-height: 2.25rem;
      }
    }

    /* Desktop Styles */
    @media (min-width: 1200px) {
      a {
        font-size: 3rem;
        line-height: 2.25rem;
      }
    }
  `;

  constructor() {
    super();
    this.name = 'Alaeddine Cheniour';
    this.url = '/';
  }

  render() {
    return html`<a href="${this.url}" >${this.name}</a>`;
  }

}
customElements.define('name-header', NameHeader);

/**
 * Navigation Item on the left
 */
export class NavItem extends LitElement {
  static properties = {
    href: { type: String },
    text: { type: String },
    active: { type: Boolean, reflect: true }
  };

  static styles = css`
    :host { display: block; }
    
    .nav-link {
      display: flex;
      align-items: center;
      padding: 10px 0;
      text-decoration: none;
    }

    .nav-indicator {
      width: 32px;
      height: 1px;
      background-color: var(--slate-600);
      margin-right: 16px;
      transition: all 0.3s ease;
    }

    .nav-text {
      font-size: 0.75rem;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.1em;
      color: var(--slate-500);
    }

    /* Hover States: The indicator grows and the text brightens */
    .nav-link:hover .nav-indicator,
    :host([active]) .nav-indicator {
      width: 64px;
      background-color: var(--slate-200);
    }

    .nav-link:hover .nav-text,
    :host([active]) .nav-text {
      color: var(--slate-200);
    }
  `;

  render() {
    return html`
      <a class="nav-link" href="${this.href}">
        <span class="nav-indicator"></span>
        <span class="nav-text">${this.text}</span>
      </a>
    `;
  }
}
customElements.define('nav-item', NavItem);

/**
 * Navigation Menu
 */

export class NavMenu extends LitElement {
  static properties = {
    activeSection: { type: String }
  };

  static styles = css`
    nav ul {
      margin: 48px 0 24px 0;
      width: max-content;
      padding: 0;
      list-style-type: none;
    }
  `;

  constructor() {
    super();
    // Default to the first section or check the URL hash
    this.activeSection = window.location.hash || '#about';
  }

  // This function runs when any link is clicked
  handleNavClick(e, id) {
    e.preventDefault(); // Prevents the browser from trying to natively jump

    // Shout up to the parent components that a link was clicked
    this.dispatchEvent(new CustomEvent('nav-link-clicked', {
      detail: { section: id },
      bubbles: true,
      composed: true // Crucial: lets the event escape the shadow DOM!
    }));
    this.activeSection = id;
  }

  render() {

    return html`
      <nav aria-label="Main navigation">
        <ul>
          ${sections.map(section => html`
            <li>
              <nav-item 
                href="${section.id}" 
                text="${section.label}"
                ?active="${this.activeSection === section.id}"
                @click="${(e) => this.handleNavClick(e, section.id)}">
              </nav-item>
            </li>
          `)}
        </ul>
      </nav>
    `;
  }
}
customElements.define('nav-menu', NavMenu);

/**
 * Social Link Item
 */
export class SocialLink extends LitElement {
  static properties = {
    href : {type : String},
    label : {type : String},
    iconName: { type: String }
  };

  static styles = css`
    .social-link {
      margin-top: 30px;
      margin-right: 20px;
      font-size: 0.5rem;
      flex-shrink: 0;
      display: block;
      color: inherit;
      text-decoration: none;
    }
    .social-link:hover { color: var(--slate-200); }
    .social-icon { width: 24px; height: 24px; }
  `;

  render() {
    return html`
      <a class="social-link" href="${this.href}" aria-label="${this.label}">
        ${icons[this.iconName]}
      </a>
    `;
  }
}
customElements.define('social-link', SocialLink);

/**
 * Social Link List
 */
export class SocialList extends LitElement {
  static styles = css`
    
    ul {
      display: flex;
      margin-top: auto;
      align-items: center;
      margin-left: 4px;
      padding: 0;
    }
    li {
      list-style-type: none;
    }
    /* We can style the internal icon size from here ::slotted(social-link), social-link {--icon-size: 24px;} */
  `;

  render() {
    return html`
      <ul>
        ${socials.map(s => html`
          <li>
            <social-link 
              .iconName="${s.name}" 
              .label="${s.label}" 
              .href="${s.url}">
            </social-link>
          </li>
        `)}
      </ul>
    `;
  }
}
customElements.define('social-list', SocialList);


/**
 * Header - left panel
 */
export class HeaderPart extends LitElement {
  
  static properties = {
    activeSection: { type: String }
  };

  constructor() {
    super();
    this.activeSection = window.location.hash || '#about';
  }

  static styles = css`
    :host {
      display: block;
      width: 100%;
      height: auto;
      position: static;
      box-sizing: border-box;
    }

    @media (min-width: 1024px) {
      :host {
        width: 45%;
        height: 100vh;
        position: sticky;
        top: 0;
      }
    }

    header {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      padding: 48px 24px;
      width: 100%;
      height: 100%; /* Fill the height provided by :host */
      box-sizing: border-box;
    }

    @media (min-width: 768px) {
      header {
        padding: 62px 48px;
      }
    }

    @media (min-width: 1024px) {
      header {
        padding: 96px 48px;
        padding-bottom: 24px;
      }
    }

    .subtitle{
      color : rgb(226, 232, 240);
      font-size: 1.125rem;
      font-weight: 500;
      letter-spacing: -0.03em;
      line-height: 1.75rem;
      margin-top: 12px;
    }

    @media (min-width: 768px) {
      .subtitle{
        font-size: 1.25rem;
      }
    }

    @media (min-width: 1024px) {
      .subtitle{
        font-size: 1.25rem;
      }
    }

    .intro-paragraph{
      color : rgb(148, 163, 184);
      margin-top: 16px;
      max-width: 27rem;
      line-height: 1.5;
    }

    @media (min-width: 768px) {
      .intro-paragraph{
        max-width: 35rem;
      }
    }

    nav-menu {
      display: none;
    }

    /* Show on Desktop (1024px and up) */
    @media (min-width: 1024px) {
      nav-menu {
        display: block;
      }
    }
  `;

  render() {
    return html`
        <header>
            <div>
              <name-header name="Alaeddine Cheniour" url="/"></name-header>
              <h2 class="subtitle"> Software Engineer | 3D Graphics & HCI</h2>
              <p class="intro-paragraph">
                I build interactive 3D graphics and human-centered software.
              </p>
              <nav-menu .activeSection="${this.activeSection}"></nav-menu>
            </div>
            <div class="social-links">
              <social-list></social-list>
            </div>
        </header>
    `;
  }
}
customElements.define('header-part', HeaderPart);