import { LitElement, css, html } from 'lit'
import { icons } from './icons.js';
import {socials,experiences,education,projects} from './data.js'
import { LinkItem } from './link-item.js';
import { TechTag } from './tech-tag.js';


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

/**
 * Footer Part in Main
 */
export class FooterPart extends LitElement {
  constructor() {
    super();
  }

  static styles =
    css`
      .mb-4 {
        margin-bottom: 16px;
      }

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
      }
    `;

  render() {
    return html`
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
    `;
  }
}
customElements.define('footer-part', FooterPart);

/**
 * The main part - right panel
 */
export class MainPart extends LitElement {
  constructor() {
    super();
    this.observer = null;
  }

  static styles = 
    css`
      :host {
        display: block;
        width: 100%;
        box-sizing: border-box;
      }

      @media (min-width: 1024px) {
        :host {
          width: 55%; /* Takes up the remaining space next to the 45% header */
        }
      }

      main {
        width: 100%;
        padding: 24px 24px;
        box-sizing: border-box;
      }

      @media (min-width: 768px) {
        main {
          padding: 24px 48px;
        }
      }

      @media (min-width: 1024px) {
        main {
          padding: 90px 30px;
        }
      }

      .mb-4 {
        margin-bottom: 16px;
      }

      .focusEl {
        font-weight: 500;
        color: var(--slate-200);
        text-decoration: none;
      }
    `;
  
  scrollToSection(sectionId) {
    const targetSection = this.shadowRoot.querySelector(sectionId);
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: 'smooth' });
    }
  }

  firstUpdated() {
    const sections = this.shadowRoot.querySelectorAll('portfolio-section');

    const observerOptions = {
      rootMargin: '-30% 0px -60% 0px', 
      threshold: 0
    };

    this.observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Instead of setting a property, we shout out to the parent component
          this.dispatchEvent(new CustomEvent('section-changed', {
            detail: { section: `#${entry.target.id}` },
            bubbles: true, 
            composed: true // Allows the event to cross the shadow DOM boundary
          }));
        }
      });
    }, observerOptions);

    sections.forEach(section => this.observer.observe(section));
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    if (this.observer) this.observer.disconnect();
  }

  render() {
    return html`
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

            <footer-part></footer-part>

          </main>
    `;
  }
}
customElements.define('main-part', MainPart);


//<!--<link-item link="/archive" text="View Project Archive" svg="true"></link-item>-->


