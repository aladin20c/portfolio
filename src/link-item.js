import { LitElement, css, html } from 'lit'
import { icons } from './icons.js';

/**
 * a conponenet for <a? tags 
 */
export class LinkItem extends LitElement {
  static properties = {
    text: { type: String },
    link: { type: String },
    svg: { type: Boolean },
    dashedBorder: {type: Boolean},
    active: { type: Boolean, reflect: true },
    bold:{ type: Boolean, reflect: true },
    svgName:{ type: String },
    svgEffect:{ type: Boolean },    
  }
  constructor() {
    super();
    this.text = '';
    this.link = '/';
    this.svg = true;
    this.dashedBorder = false;
    this.active = false;
    this.bold = false;
    this.svgName = 'arrow';
    this.svgEffect = true;
  }

  static styles = css`
    :host {
      display: inline-block;
    }
    
    a {
      display: inline-flex;
      align-items: center;
      font-weight: 500;
      line-height: 1.5;
      color: var(--slate-200);
      text-decoration: none;
      font-size: 1rem;
      transition: color 0.2s ease;
    }

    a.with-border{
      border-bottom: 1px dashed rgba(148, 163, 184, 0.3);
    }

    :host([active]) a,
    a:hover,
    a:focus-visible {
      color: var(--teal-300);
      border-bottom-color: var(--teal-400);
    }

    :host([active]) a.active.with-border,
    a.active.with-border:hover,
    a.active.with-border:focus-visible {
      border-bottom-color: var(--teal-400);
    }

    /* Active state styling */
    a.active {
      color: var(--teal-300);
    }

    a.active.with-border{
      border-bottom-color: var(--teal-400);
    }

    span {
      display: inline-block;
    }
    span.bold {
      font-weight: 700;
    }

    svg {
      display: inline-block;
      height: 16px;
      width: 16px;
      flex-shrink: 0;
      transition: transform 0.2s ease;
      margin-left: 6px;
      transform: translateY(0);
    }

    :host([active]) a svg,
    a:hover svg,
    a:focus-visible svg, 
    a.active svg {
      transform: translate(2px, -1px);
    }
  `;

  render() {
    return html`
      <a 
        href="${this.link}" 
        target="_blank" 
        rel="noopener noreferrer"
        class="${this.active ? 'active' : ''} ${this.dashedBorder ? 'with-border' : ''}"
      >
        <span class="${this.bold ? 'bold' : ''}" >${this.text}</span>
        ${this.svg ? html`${icons[this.svgName]}` : ''}
      </a>
    `;
  }
}
customElements.define('link-item', LinkItem);
