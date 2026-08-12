import { LitElement, css, html } from 'lit'

export class ArcadeWidget extends LitElement {
  static styles = css`
    :host {
      /* Locks the widget to the bottom right of the screen */
      position: absolute
      ;
      bottom: 30px;
      right: 30px;
      z-index: 9999; 
    }

    .widget-link {
      display: block;
      cursor: pointer;
      /* Initial smooth, bouncy transition when hovered */
      transition: transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    }

    .widget-gif {
      width: 80px; /* Adjust this based on your GIF's actual size */
      height: auto;
      /* Adds a subtle shadow to make it pop off the background */
      filter: drop-shadow(0 4px 6px rgba(0, 0, 0, 0.3));
      transition: filter 0.3s ease;
    }

    /* Hover State */
    .widget-link:hover {
      /* Triggers a continuous floating animation */
      animation: float 2s ease-in-out infinite;
    }

    .widget-link:hover .widget-gif {
      /* Deepens the shadow when floating to enhance the 3D effect */
      filter: drop-shadow(0 15px 15px rgba(0, 0, 0, 0.4));
    }

    /* Keyframes for the continuous float */
    @keyframes float {
      0% { transform: translateY(-15px); }
      50% { transform: translateY(-5px); }
      100% { transform: translateY(-15px); }
    }
  `;

  static properties = {
    linkUrl: { type: String },
    gifSrc: { type: String }
  };

  constructor() {
    super();
    // Default values you can override via HTML attributes
    this.linkUrl = 'https://aladin20c.github.io/portfolio-playable/'; 
    this.gifSrc = '/arcade.gif';
  }

  render() {
    return html`
      <!-- target="_blank" opens the link in a new tab -->
      <!-- rel="noopener noreferrer" is a security best practice for external links -->
      <a href="${this.linkUrl}" target="_blank" rel="noopener noreferrer" class="widget-link">
        <img src="${this.gifSrc}" alt="Arcade Secret" class="widget-gif" />
      </a>
    `;
  }
}

customElements.define('arcade-widget', ArcadeWidget);