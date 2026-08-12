import { LitElement, css, html } from 'lit'
import { icons } from './icons.js';
import {sections,socials,experiences,education,projects} from './data.js'



export const hoverBackgroundStyle = css`
  .hover-background {
    position: absolute;
    inset: -16px -16px -16px -16px;
    z-index: 0;  /* Behind the content */
    border-radius: 6px;
    display: none;
    pointer-events: none;  /* So it doesn't interfere with hovering */
  }

  @media (min-width: 1024px) {
    .hover-background {
      display: block;
      inset: -24px -24px -24px -24px;
    }
  }
`;

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
    this.activeSection = id;
    // The component will now re-render, updating which nav-item is active
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
 * a conponenet for <a? tags 
 */
export class LinkItem extends LitElement {
  static properties = {
    text: { type: String },
    link: { type: String },
    svg: { type: Boolean },
    dashedBorder: {type: Boolean},
    active: { type: Boolean, reflect: true },
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

  constructor() {
    super();
    this.svg = false;
    this.active = false;
    this.dashedBorder = false;
  }

  render() {
    return html`
      <a 
        href="${this.link}" 
        target="_blank" 
        rel="noopener noreferrer"
        class="${this.active ? 'active' : ''} ${this.dashedBorder ? 'with-border' : ''}"
      >
        <span>${this.text}</span>
        ${this.svg ? html`${icons["arrow"]}` : ''}
      </a>
    `;
  }
}
customElements.define('link-item', LinkItem);



/**
 * MAin Part - MAin Part - MAin Part - MAin Part
 */

export class PortfolioSection extends LitElement {
  static properties = {
    id: { type: String },
  };

  static styles = css`
    :host {
      display: block;
      scroll-margin-top: 64px;
      scroll-behavior: smooth;
    }

    section {
      margin-bottom: 64px;
    }

    @media (min-width: 768px) {
      section {
        margin-bottom: 96px;
      }
    }

    @media (min-width: 1024px) {
      section {
        margin-bottom: 144px;
      }
    }

    .section-header {
      position: sticky;
      top: 0;
      z-index: 20;
      margin: 0 -24px;
      width: 100vw;
      background-color: rgba(15, 23, 42, 0.25);
      padding: 20px 24px;
      backdrop-filter: blur(8px);
    }

    @media (min-width: 768px) {
      .section-header {
        margin: 0 -48px;
        padding: 20px 48px;
      }
    }

    @media (min-width: 1024px) {
      .section-header {
        display: none;
        visibility: hidden;
        opacity: 0;
      }
    }

    .section-title {
      font-size: 0.875rem;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.1em;
      color: var(--slate-200);
    }
  `;

  render() {
    const title = this.id ? this.id.charAt(0).toUpperCase() + this.id.slice(1) : '';
    return html`
      <section id="${this.id}">
        <div class="section-header">
          <h2 class="section-title">${title}</h2>
        </div>
        <div class="section-content">
          <slot></slot>
        </div>
      </section>
    `;
  }


}
customElements.define('portfolio-section', PortfolioSection);


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


/**
 * Experience Card
 */
export class ExperienceCard extends LitElement {
  static properties = {
    date: { type: String },
    role: { type: String },
    company: { type: String },
    companyLink: { type: String },
    description: { type: String },
    techs: { type: Array },
    isHovered: { type: Boolean }
  };


  static styles = [
    hoverBackgroundStyle,
    css`
      :host { 
        cursor: pointer;
      }

      .education-card {
        position: relative;
        padding: 0;
        margin-bottom: 48px;
      }
      
      
      .experience-grid {
        display: grid;
        padding-bottom: 4px;
        transition: all 0.3s ease;
        position: relative;
      }

      @media (min-width: 640px) {
        .experience-grid {
          grid-template-columns: repeat(8, minmax(0, 1fr));
          gap: 32px;
        }
      }

      @media (min-width: 768px) {
        .experience-grid {
          gap: 16px;
        }
      }

      .experience-date {
        padding: 0;
        z-index: 10;
        margin-bottom: 8px;
        margin-top: 4px;
        font-size: 0.75rem;
        font-weight: 600;
        text-transform: uppercase;
        letter-spacing: 0.05em;
        color: var(--slate-500);
      }


      @media (min-width: 640px) {
        .experience-date {
          grid-column: span 2 / span 2;
        }
      }

      .experience-content {
        padding: 0;
        margin: 0;
        z-index: 10;
      }

      @media (min-width: 640px) {
        .experience-content {
          grid-column: span 6 / span 6;
        }
      }

      .experience-title {
        margin: 0;
        font-weight: 500;
        line-height: 1.25;
        color: var(--slate-200);
      }

      .experience-description {
        margin-top: 8px;
        font-size: 0.875rem;
        line-height: 1.5;
      }

      .tech-list {
        display: flex;
        flex-wrap: wrap;
        margin-top: 8px;
      }
    `
  ];

  handleHostClick(event) {
    if (!event.target.closest('a')) {
      window.open(this.companyLink, '_blank', 'noopener,noreferrer');
    }
  }

  constructor() {
    super();
    this.isHovered = false;
  }

  handleMouseEnter() {
    this.isHovered = true;
  }

  handleMouseLeave() {
    this.isHovered = false;
  }


  render() {
    return html`
    <div class="education-card"  
      @click=${this.handleHostClick} 
      @mouseenter=${this.handleMouseEnter}
      @mouseleave=${this.handleMouseLeave}
    >
      <div class="hover-background"></div>
      <div class="experience-grid">
        <div class="experience-date">${this.date}</div>
        
        <div class="experience-content">
          <h3 class="experience-title">
            <link-item link="${this.companyLink}" text="${this.role} . ${this.company}" svg="true" ?active=${this.isHovered} ></link-item>
          </h3>
          
          <div class="experience-description">
            ${this.description}
          </div>
          
          <div class="tech-list">
            ${this.techs ? this.techs.map(tech => html`<tech-tag name="${tech}"></tech-tag>`) : ''}
          </div>
        </div>
      </div>
    </div>  
    `;
  }
}
customElements.define('experience-card', ExperienceCard);



export class ExperienceList extends LitElement {

  constructor() {
    super();
  }


  static styles = [
    hoverBackgroundStyle,
    css`
      ul {
        list-style: none;
        padding: 0;
        margin: 0;
      }
      
      li {
        position: relative; 
        padding: 0;
        margin-bottom: 48px; 
      }

      experience-card {
        position: relative;
        z-index: 1;
        display: block;
      }
      
      @media (max-width: 1023px) {
        hover-background {
          display: none;
        }
      }

      @media (min-width: 1024px) and (hover: hover) and (pointer: fine) {
        ul:hover li {
          opacity: 0.5;
          transition: opacity 0.1s ease;
        }

        ul li:hover {
          opacity: 1 !important;
        }

        li:hover .hover-background {
          background-color: rgba(30, 41, 59, 0.5);
          box-shadow: inset 0 1px 0 0 rgba(148, 163, 184, 0.1);
          filter: drop-shadow(0 10px 8px rgba(0, 0, 0, 0.04));
        }
      }
    `
  ];


  render() {
    return html`
      <ul>
        ${experiences.map(exp => html`
          <li>
            <div class="hover-background"></div>
            <experience-card 
                .date="${exp.date}"
                .role="${exp.role}"
                .company="${exp.company}"
                .companyLink="${exp.companyLink}"
                .description="${exp.description}"
                .techs="${exp.techs}">
            </experience-card>
          </li>
        `)}
      </ul>
    `;
  }
}
customElements.define('experience-list', ExperienceList);



/**
 * Education Card
 */
export class EducationCard extends LitElement {
  static properties = {
    period: { type: String },
    degree: { type: String },
    field: { type: String },
    institution: { type: String },
    institutionLink: { type: String },
    achievements: { type: Array },
    thesis: { type: String },
    grade: { type: String },
    isHovered: { type: Boolean }
  };

  static styles = css`
    :host {
      cursor: pointer;
    }

    .education-card {
      position: relative;
      padding: 0;
      margin-bottom: 48px;
      list-style: none;
    }
    
    .education-container {
      position: relative;
    }

    /* Period on top - matching original style */
    .education-period {
      display: inline-block;
      margin-bottom: 8px;
      font-size: 0.75rem;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      color: var(--slate-500);
      z-index: 10;
      position: relative;
    }

    .education-content {
      padding: 0;
      margin: 0;
      z-index: 10;
      position: relative;
    }

    .education-title {
      margin-top: 10px;
      font-weight: 500;
      line-height: 1.25;
      color: var(--slate-200);
      display: flex;
      flex-wrap: wrap;
      align-items: baseline;
    }

    .degree {
      font-size: 1rem;
      font-weight: 500;
      color: var(--slate-200);
    }

    .field {
      font-size: 0.9rem;
      font-weight: 400;
      color: var(--slate-400);
      margin-left: 4px;
      margin-right: 4px;
    }

    @media (max-width: 640px) {
      .education-title {
        gap: 4px;
      }

      .field, .institution-wrapper {
        margin-left: 0;
      }
    }

    /* Using link-item component for institution */
    .institution-wrapper {
      display: block;
      margin-left: 0;
    }

    /* Thesis section */
    .thesis {
      margin: 16px 0;
      padding: 12px 16px;
      background: rgba(15, 23, 42, 0.6);
      border-radius: 8px;
      font-size: 0.9rem;
      font-style: italic;
      color: var(--slate-300);
      border-left: 3px solid var(--teal-400);
      position: relative;
    }

    .thesis::before {
      content: '“';
      font-size: 2rem;
      position: absolute;
      left: 8px;
      top: -8px;
      color: var(--teal-400);
      opacity: 0.5;
      font-family: serif;
    }

    .thesis::after {
      content: '”';
      font-size: 2rem;
      position: absolute;
      right: 12px;
      bottom: -20px;
      color: var(--teal-400);
      opacity: 0.5;
      font-family: serif;
    }

    .thesis strong {
      color: var(--teal-300);
      font-weight: 500;
      font-style: normal;
    }

    /* Grade styled like a tech tag */
    .grade-list {
      display: flex;
      flex-wrap: wrap;
      margin-top: 8px;
    }

    .grade-tag {
      display: inline-block;
      padding: 4px 12px;
      font-size: 0.7rem;
      font-weight: 500;
      color: var(--teal-300);
      background: rgba(45, 212, 191, 0.1);
      border-radius: 12px;
      letter-spacing: 0.01em;
    }

    /* Achievements list */
    .achievements {
      margin-top: 8px;
      padding: 0;
      list-style: none;
    }

    .achievement-item {
      display: flex;
      align-items: flex-start;
      margin-bottom: 6px;
      font-size: 0.85rem;
      color: var(--slate-400);
      line-height: 1.5;
    }

    .achievement-marker {
      display: inline-block;
      min-width: 16px;
      margin-right: 8px;
      color: var(--slate-500);
      font-size: 0.8rem;
    }

    
  `;

  handleHostClick(event) {
    if (!event.target.closest('a')) {
      window.open(this.institutionLink, '_blank', 'noopener,noreferrer');
    }
  }

  constructor() {
    super();
    this.isHovered = false;
  }

  handleMouseEnter() {
    this.isHovered = true;
  }

  handleMouseLeave() {
    this.isHovered = false;
  }

  render() {
    return html`
      <div class="education-card"
          @click=${this.handleHostClick}
          @mouseenter=${this.handleMouseEnter}
          @mouseleave=${this.handleMouseLeave}
      >
        <div class="education-container">
          <div class="education-period">${this.period}</div>

          <div class="education-content">
            
            <span class="institution-wrapper">
                <link-item
                    link="${this.institutionLink}"
                    text="${this.institution}"
                    svg="true"
                    ?active=${this.isHovered}
                    ?dashedBorder=${true}
                ></link-item>
              </span>
            <h5 class="education-title">
              <span class="degree">${this.degree}</span>
              ${this.field ? html`<span class="field">· ${this.field}</span>` : ''}
            </h5>
            

            ${this.grade ? html`
              <!--<div class="grade-list"><span class="grade-tag">${this.grade}</span></div>-->
            ` : ''}

            ${this.thesis ? html`
              <div class="thesis">
                <strong>Thesis:</strong> ${this.thesis}
              </div>
            ` : ''}

            ${this.achievements?.length ? html`
              <ul class="achievements">
                ${this.achievements.map(achievement => html`
                  <li class="achievement-item">
                    <span class="achievement-marker">—</span>
                    <span>${achievement}</span>
                  </li>
                `)}
              </ul>
            ` : ''}
          </div>
        </div>
      </div>
    `;
  }
}
customElements.define('education-card', EducationCard);



export class EducationList extends LitElement {
  constructor() {
    super();
  }

  static styles = [ 
    hoverBackgroundStyle,
    css`
      ul {
        list-style: none;
        padding: 0;
        margin: 0;
      }
      
      li {
        position: relative; 
        padding: 0;
        margin-bottom: 48px; 
      }

      education-card {
        position: relative;
        z-index: 1;
        display: block;
      }

      @media (max-width: 1023px) {
        hover-background {
          display: none;
        }
      }

      @media (min-width: 1024px) and (hover: hover) and (pointer: fine) {
        ul:hover li {
          opacity: 0.5;
          transition: opacity 0.1s ease;
        }

        ul li:hover {
          opacity: 1 !important;
        }

        li:hover .hover-background {
          background-color: rgba(30, 41, 59, 0.5);
          box-shadow: inset 0 1px 0 0 rgba(148, 163, 184, 0.1);
          filter: drop-shadow(0 10px 8px rgba(0, 0, 0, 0.04));
        }
      }
    `
  ];

  render() {
    return html`
      <ul>
        ${education.map(edu => html`
          <li>
            <div class="hover-background"></div>
            <education-card
                .period="${edu.period}"
                .degree="${edu.degree}"
                .field="${edu.field}"
                .institution="${edu.institution}"
                .institutionLink="${edu.institutionLink}"
                .achievements="${edu.achievements}"
                .thesis="${edu.thesis}"
                .grade="${edu.grade}">
            </education-card>
          </li>
        `)}
      </ul>
    `;
  }
}
customElements.define('education-list', EducationList);




/**
 * Project Card
 */
export class ProjectCard extends LitElement {
  static properties = {
    title: { type: String },
    description: { type: String },
    techs: { type: Array },
    image: { type: String }, // Optional image URL
    githubLink: { type: String }, // Optional GitHub link
    demoLink: { type: String }, // Optional demo link
    isHovered: { type: Boolean }
  };

  static styles = css`
    :host {
      cursor: pointer;
      display: block;
    }

    .project-card {
      position: relative;
      padding: 0;
      margin-bottom: 48px;
      list-style: none;
    }
    
    .project-container {
      position: relative;
    }

    /* Grid layout for image + content */
    .project-grid {
      display: grid;
      gap: 20px;
    }

    @media (min-width: 640px) {
      .project-grid {
        grid-template-columns: 200px 1fr; /* Fixed width for image on left */
        gap: 24px;
      }
    }

    /* Image/placeholder section */
    .project-image {
      position: relative;
      width: 100%;
      aspect-ratio: 16/10; /* Rectangular ratio */
      border-radius: 6px;
      overflow: hidden;
      background-color: var(--slate-800);
      z-index: 10;
    }

    .project-image img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.3s ease;
    }

    .project-card:hover .project-image img {
      transform: scale(1.05);
    }

    /* Placeholder when no image */
    .image-placeholder {
      width: 100%;
      height: 100%;
      background: linear-gradient(135deg, var(--slate-800) 0%, var(--slate-900) 100%);
      display: flex;
      align-items: center;
      justify-content: center;
      color: var(--slate-500);
      font-size: 0.9rem;
      font-weight: 500;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      border: 1px solid var(--slate-700);
    }

    .project-content {
      padding: 0;
      margin: 0;
      z-index: 10;
      position: relative;
    }

    .project-title {
      margin: 0 0 8px 0;
      font-size: 1.25rem;
      font-weight: 500;
      line-height: 1.25;
      color: var(--slate-200);
    }

    .project-description {
      margin-top: 8px;
      font-size: 0.875rem;
      line-height: 1.5;
      color: var(--slate-400);
    }

    /* Tech stack */
    .tech-list {
      display: flex;
      flex-wrap: wrap;
      margin-top: 12px;
      gap: 8px;
    }

    .tech-tag {
      display: inline-block;
      padding: 4px 12px;
      font-size: 0.7rem;
      font-weight: 500;
      color: var(--teal-300);
      background: rgba(45, 212, 191, 0.1);
      border-radius: 12px;
      letter-spacing: 0.01em;
    }

    /* Links section */
    .project-links {
      display: flex;
      flex-wrap: wrap;
      gap: 16px;
      margin-top: 16px;
    }

    .project-links a {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      font-size: 0.9rem;
      color: var(--slate-400);
      text-decoration: none;
      transition: color 0.2s ease;
    }

    .project-links a:hover {
      color: var(--teal-300);
    }

    .project-links svg {
      width: 16px;
      height: 16px;
      transition: transform 0.2s ease;
    }

    .project-links a:hover svg {
      transform: translate(2px, -2px);
    }

    /* Responsive */
    @media (max-width: 639px) {
      .project-grid {
        grid-template-columns: 1fr;
      }
      
      .project-image {
        max-width: 100%;
        margin-bottom: 8px;
      }
    }
  `;

  handleHostClick(event) {
    // Don't open if clicking on a link
    if (!event.target.closest('a')) {
      // Default to GitHub if exists, otherwise demo
      if (this.githubLink) {
        window.open(this.githubLink, '_blank', 'noopener,noreferrer');
      } else if (this.demoLink) {
        window.open(this.demoLink, '_blank', 'noopener,noreferrer');
      }
    }
  }

  constructor() {
    super();
    this.isHovered = false;
    this.techs = [];
  }

  handleMouseEnter() {
    this.isHovered = true;
  }

  handleMouseLeave() {
    this.isHovered = false;
  }

  renderImage() {
    if (this.image) {
      return html`<img src="${this.image}" alt="${this.title}">`;
    } else {
      return html`<div class="image-placeholder">${this.title.charAt(0)}</div>`;
    }
  }

  render() {
    return html`
      <div class="project-card"
          @click=${this.handleHostClick}
          @mouseenter=${this.handleMouseEnter}
          @mouseleave=${this.handleMouseLeave}
      >
        <div class="project-container">
          <div class="project-grid">
            <!-- Image on left -->
            <div class="project-image">
              ${this.renderImage()}
            </div>

            <!-- Content on right -->
            <div class="project-content">
              <h3 class="project-title">${this.title}</h3>
              
              <div class="project-description">
                ${this.description}
              </div>
              
              ${this.techs?.length ? html`
                <div class="tech-list">
                  ${this.techs.map(tech => html`
                    <span class="tech-tag">${tech}</span>
                  `)}
                </div>
              ` : ''}

              <!-- Links section -->
              <div class="project-links">
                ${this.githubLink ? html`
                  <a href="${this.githubLink}" 
                     target="_blank" 
                     rel="noopener noreferrer"
                     @click=${(e) => e.stopPropagation()}>
                    <span>GitHub</span>
                    ${icons["arrow"]}
                  </a>
                ` : ''}
                
                ${this.demoLink ? html`
                  <a href="${this.demoLink}" 
                     target="_blank" 
                     rel="noopener noreferrer"
                     @click=${(e) => e.stopPropagation()}>
                    <span>Live Demo</span>
                    ${icons["arrow"]}
                  </a>
                ` : ''}
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
  }
}
customElements.define('project-card', ProjectCard);

/**
 * Project List
 */
export class ProjectList extends LitElement {
  constructor() {
    super();
  }

  static styles = [
    hoverBackgroundStyle,
    css`
      ul {
        list-style: none;
        padding: 0;
        margin: 0;
      }
      
      li {
        position: relative; 
        padding: 0;
        margin-bottom: 48px; 
      }

      project-card {
        position: relative;
        z-index: 1;
        display: block;
      }

      @media (max-width: 1023px) {
        hover-background {
          display: none;
        }
      }

      @media (min-width: 1024px) and (hover: hover) and (pointer: fine) {
        ul:hover li {
          opacity: 0.5;
          transition: opacity 0.1s ease;
        }

        ul li:hover {
          opacity: 1 !important;
        }

        li:hover .hover-background {
          background-color: rgba(30, 41, 59, 0.5);
          box-shadow: inset 0 1px 0 0 rgba(148, 163, 184, 0.1);
          filter: drop-shadow(0 10px 8px rgba(0, 0, 0, 0.04));
        }
      }
    `
  ];

  render() {
    return html`
      <ul>
        ${projects.map(project => html`
          <li>
            <div class="hover-background"></div>
            <project-card
                .title="${project.title}"
                .description="${project.description}"
                .techs="${project.techs}"
                .image="${project.image}"
                .githubLink="${project.githubLink}"
                .demoLink="${project.demoLink}">
            </project-card>
          </li>
        `)}
      </ul>
    `;
  }
}
customElements.define('project-list', ProjectList);





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



/**
 * Home Page
 */
export class HomePage extends LitElement {
  static properties = {
    activeSection: { type: String }
  };
  constructor() {
    super();
    this.activeSection = '#about'; // Default starting section
    this.observer = null;          // Store observer so we can clean it up later
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


    /***********************HEADER***********************/

    header {
      top: 0;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      padding: 48px 24px;
      position: static;
      height: auto;
      width: 100%;
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
        position: sticky;
        max-height: 100vh;
        width: 45%;
        height: 100vh;
      }
    }


    /***********************subtitle***********************/

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

    /***********************paragraph***********************/

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

    /***********************nav*menu***********************/

    nav-menu {
      display: none;
    }

    /* Show on Desktop (1024px and up) */
    @media (min-width: 1024px) {
      nav-menu {
        display: block;
      }
    }



    /***********************MAIN***********************/


    main {
      padding: 24px 24px;
      width: 100%;
    }

    @media (min-width: 768px) {
      main {
        padding: 24px 48px;
      }
    }

    @media (min-width: 1024px) {
      main {
        padding: 90px 30px;
        width: 55%;
      }
    }


    /***********************ABOUT***********************/

    .mb-4 {
      margin-bottom: 16px;
    }

    .focusEl {
      font-weight: 500;
      color: var(--slate-200);
      text-decoration: none;
    }

    /***********************Footer***********************/

    footer {
      max-width: 28rem;
      padding-bottom: 64px;
      font-size: 0.875rem;
      color: var(--slate-500);
    }

    @media (min-width: 640px) {
      footer {
        padding-bottom: 0;
      }
    }

    footer a {
      font-weight: 500;
      color: var(--slate-400);
      text-decoration: none;
    }

    footer a:hover,
    footer a:focus-visible {
      color: var(--teal-300);
    }`
  ;

  firstUpdated() {
    // Query elements from this component's Shadow DOM
    const sections = this.shadowRoot.querySelectorAll('portfolio-section');

    const observerOptions = {
      rootMargin: '-30% 0px -60% 0px', 
      threshold: 0
    };

    this.observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // 3. Update the Lit property instead of touching the DOM directly
          this.activeSection = `#${entry.target.id}`;

          // Update URL without jumping
          history.replaceState(null, null, `#${entry.target.id}`);
        }
      });
    }, observerOptions);
    // Start observing all sections
    sections.forEach(section => this.observer.observe(section));
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    if (this.observer) {
      this.observer.disconnect();
    }
  }

  render() {
    return html`
        <div id="main-container">

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



          <main id="main-content">

            <portfolio-section id="about">
              <p class="mb-4">
                I’m a software engineer and HCI researcher specializing in the intersection of
                high-performance graphics and human-centered design. I enjoy building powerful systems that remain easy to use,
                bridging the gap between complex architecture and intuitive design.
              </p>

              <p class="mb-4">
                I am finishing my dual degree: an Engineering degree in Mathematics and Computer Science from
                <link-item link="https://www.polytech.universite-paris-saclay.fr/" text="Polytech Paris-Saclay"></link-item>
                and a Master’s in
                <span class="focusEl">Human-Computer Interaction, Computer Graphics & Design</span>
                from
                <link-item link="https://www.ip-paris.fr/" text="Institut Polytechnique de Paris"></link-item>.
                These experiences have shaped my approach to software, combining engineering with a deep understanding of how humans interact with digital environments.
              </p>

              <p class="mb-4">
                Currently, I’m a Research Intern at
                <link-item link="https://www.3ds.com/fr/science/meditwin" text="Dassault Systèmes"></link-item>
                Human Virtual Twin research team, where I focus on medical visualization. My work involves identifying innovative
                2D and 3D tools to manipulate medical data, as well as exploring remote
                rendering and optimisation techniques.
              </p>


              <p class="mb-4">
                Besides work, I’m usually capturing the world through street photography or getting lost in a good book.
              </p>

            </portfolio-section>


            <portfolio-section id="experience">
              <experience-list></experience-list>
              <link-item link="/resume.pdf" text="View Full Résumé" svg="true"></link-item>
            </portfolio-section>


            <portfolio-section id="education">
              <education-list></education-list>
            </portfolio-section>


            <portfolio-section id="projects">
              <project-list></project-list>

            </portfolio-section>


            <footer>
              <p>
                Designed in <a href="https://figma.com" target="_blank" rel="noopener noreferrer">Figma</a>,
                built using <a href="https://lit.dev" target="_blank" rel="noopener noreferrer">Lit</a> and
                CSS, deployed on
                <a href="https://pages.github.com" target="_blank" rel="noopener noreferrer">GitHub Pages</a>.
              </p>
              <p class="mt-4">
                Inspired by Brittany Chiang's design.
              </p>
            </footer>


          </main>
        
        </div>
    `;
  }
}
customElements.define('home-page', HomePage);


//              <!--<link-item link="/archive" text="View Project Archive" svg="true"></link-item>-->


