import { LitElement, css, html } from 'lit'

/**
 * Tech Tag
 */
export class TechTag extends LitElement {
  static properties = {
    name: { type: String }
  };

  static styles = css`
    :host {
      display: inline-flex;
      align-items: center;
      border-radius: 9999px;
      background-color: var(--teal-400-tr);
      padding: 4px 12px;
      font-size: 0.75rem;
      font-weight: 500;
      line-height: 1.25;
      color: var(--teal-300);
      margin-right: 6px;
      margin-top: 8px;
    }
  `;

  render() {
    return html`${this.name}`;
  }
}
customElements.define('tech-tag', TechTag);
