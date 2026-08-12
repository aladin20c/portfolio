import { LitElement, html, css } from 'lit';
import {TechTag} from './main-element.js'

export class PageShell extends LitElement {
  static styles = css`
    :host {
      display: block;
      min-height: 100vh;
      background-color: #0f172a; /* slate-900 */
      color: #94a3b8;            /* slate-400 */
      font-family: 'Inter', sans-serif;
      -webkit-font-smoothing: antialiased;
    }
    .container {
      max-width: 80rem;          
      margin: 0 auto;
      padding: 3rem 1.5rem;      
    }
    @media (min-width: 768px) {
      .container { padding: 4rem 3rem; }
    }
    @media (min-width: 1024px) {
      .container { padding-top: 6rem; padding-bottom: 6rem; }
    }
  `;

  render() {
    return html`
      <div class="container">
        <slot></slot>
      </div>
    `;
  }
}
customElements.define('page-shell', PageShell);

export class SkipLink extends LitElement {
  static styles = css`
    .skip-link {
      position: absolute;
      left: 0;
      top: 0;
      transform: translateX(-100%);
      background: #eab308;        
      padding: 0.75rem 1rem;
      color: #0f172a;             
      font-size: 0.875rem;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.1em;
      text-decoration: none;
      border-radius: 0.25rem;
      z-index: 50;
    }
    .skip-link:focus-visible {
      transform: translateX(0);
    }
  `;

  render() {
    return html`
      <a href="#main-content" class="skip-link">
        Skip to Content
      </a>
    `;
  }
}
customElements.define('skip-link', SkipLink);

export class BackLink extends LitElement {
  static properties = {
    href: { type: String },
    label: { type: String }
  };

  static styles = css`
    a {
      display: inline-flex;
      align-items: center;
      font-weight: 600;
      color: #5eead4;             
      text-decoration: none;
      margin-bottom: 0.5rem;
    }
    svg {
      width: 1rem;
      height: 1rem;
      margin-right: 0.25rem;
      transform: rotate(180deg);
      transition: transform 0.2s;
    }
    a:hover svg {
      transform: rotate(180deg) translateX(0.25rem);
    }
  `;

  render() {
    return html`
      <a href=${this.href}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
          <path fill-rule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clip-rule="evenodd"></path>
        </svg>
        ${this.label}
      </a>
    `;
  }
}
customElements.define('back-link', BackLink);

export class SectionHeading extends LitElement {
  static styles = css`
    h1 {
      font-size: 2.25rem;        
      font-weight: 700;
      letter-spacing: -0.025em;  
      color: #e2e8f0;            
    }
    @media (min-width: 640px) {
      h1 { font-size: 3rem; }    
    }
  `;

  render() {
    return html`<h1><slot></slot></h1>`;
  }
}
customElements.define('section-heading', SectionHeading);

export class TableHead extends LitElement {
  static styles = css`
    /* CRITICAL FIX: Allows <thead> to act as part of the parent table */
    :host {
      display: contents; 
    }
    thead {
      position: sticky;
      top: 0;
      z-index: 10;
      border-bottom: 1px solid rgba(148, 163, 184, 0.1);
      background: rgba(15, 23, 42, 0.75);
      backdrop-filter: blur(8px);
    }
    th {
      padding: 1rem 0.5rem 1rem 0;
      font-size: 0.875rem;
      font-weight: 600;
      color: #e2e8f0;
      text-align: left;
    }
    .made-at-col,
    .built-with-col,
    .link-col {
      display: none;
    }
    @media (min-width: 640px) {
      .link-col { display: table-cell; }
    }
    @media (min-width: 1024px) {
      .made-at-col,
      .built-with-col { display: table-cell; }
    }
  `;

  render() {
    return html`
      <thead>
        <tr>
          <th>Year</th>
          <th>Project</th>
          <th class="made-at-col">Made at</th>
          <th class="built-with-col">Built with</th>
          <th class="link-col">Link</th>
        </tr>
      </thead>
    `;
  }
}
customElements.define('table-head', TableHead);

export class ExternalLink extends LitElement {
  static properties = {
    href: { type: String },
    label: { type: String }
  };

  static styles = css`
    a {
      display: inline-flex;
      align-items: baseline;
      font-weight: 500;
      color: #94a3b8;          
      font-size: 0.875rem;
      line-height: 1.25rem;
      text-decoration: none;
    }
    a:hover {
      color: #5eead4;          
    }
    svg {
      width: 1rem;
      height: 1rem;
      margin-left: 0.25rem;
      flex-shrink: 0;
      transition: transform 0.15s;
    }
    a:hover svg {
      transform: translate(0.125rem, -0.125rem);
    }
  `;

  render() {
    return html`
      <a href=${this.href} target="_blank" rel="noopener noreferrer">
        <span>${this.label}</span>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
          <path fill-rule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clip-rule="evenodd"></path>
        </svg>
      </a>
    `;
  }
}
customElements.define('external-link', ExternalLink);

export class ProjectRow extends LitElement {
  static properties = {
    year: { type: String },
    projectName: { type: String },
    projectUrl: { type: String },
    madeAt: { type: String },
    builtWith: { type: Array },   
    linkUrl: { type: String },
    linkLabel: { type: String }
  };

  static styles = css`
    /* CRITICAL FIX: Allows <tr> to act as part of the parent table */
    :host {
      display: contents; 
    }
    tr {
      border-bottom: 1px solid rgba(148, 163, 184, 0.1);
    }
    tr:last-child {
      border-bottom: none;
    }
    td {
      padding-top: 1rem;
      padding-bottom: 1rem;
      padding-right: 1rem;
      vertical-align: top;
    }
    .year-cell {
      font-size: 0.875rem;
      color: #94a3b8;
    }
    .project-cell {
      font-weight: 600;
      color: #e2e8f0;
      line-height: 1.375;
    }
    .mobile-project {
      display: block;
    }
    .desktop-project {
      display: none;
    }
    @media (min-width: 640px) {
      .mobile-project { display: none; }
      .desktop-project { display: block; }
    }
    .made-at-cell {
      font-size: 0.875rem;
      white-space: nowrap;
      display: none;
    }
    .built-with-cell {
      display: none;
    }
    .link-cell {
      display: none;
    }
    @media (min-width: 640px) {
      .link-cell { display: table-cell; }
    }
    @media (min-width: 1024px) {
      .made-at-cell,
      .built-with-cell { display: table-cell; }
    }
    ul {
      display: flex;
      flex-wrap: wrap;
      list-style: none;
      margin: 0;
      padding: 0;
      transform: translateY(-0.375rem);
    }
    li {
      margin: 0.25rem 0.375rem 0 0;
    }
  `;

  render() {
    const tags = (this.builtWith || []).map(
      tech => html`<li><tech-tag label=${tech}></tech-tag></li>`
    );

    return html`
      <tr>
        <td class="year-cell">${this.year}</td>
        <td class="project-cell">
          <span class="mobile-project">
            ${this.projectUrl
              ? html`<external-link href=${this.projectUrl} label=${this.projectName}></external-link>`
              : this.projectName}
          </span>
          <span class="desktop-project">${this.projectName}</span>
        </td>
        <td class="made-at-cell">${this.madeAt}</td>
        <td class="built-with-cell"><ul>${tags}</ul></td>
        <td class="link-cell">
          ${this.linkUrl
            ? html`<external-link href=${this.linkUrl} label=${this.linkLabel}></external-link>`
            : ''}
        </td>
      </tr>
    `;
  }
}
customElements.define('project-row', ProjectRow);

export class ArchivePage extends LitElement {
  static properties = {
    projects: { type: Array }
  };

  constructor() {
    super();
    this.projects = [
      {
        year: '2023',
        projectName: 'Emerson Collective',
        projectUrl: 'https://www.emersoncollective.com/',
        madeAt: 'Upstatement',
        builtWith: ['Next.js', 'TypeScript', 'SCSS', 'Contentful'],
        linkUrl: 'https://www.emersoncollective.com/',
        linkLabel: 'emersoncollective.com'
      },
      {
        year: '2022',
        projectName: 'Harvard Business School Design System',
        projectUrl: '',
        madeAt: 'Upstatement',
        builtWith: ['Storybook', 'React', 'TypeScript'],
        linkUrl: '',
        linkLabel: ''
      }
    ];
  }

  static styles = css`
    table {
      width: 100%;
      border-collapse: collapse;
      margin-top: 3rem;
      text-align: left;
    }
  `;

  render() {
    return html`
      <page-shell>
        <skip-link></skip-link>
        <back-link href="/" label="Aladin"></back-link>
        <section-heading>All Projects</section-heading>

        <table id="main-content">
          <table-head></table-head>
          <tbody>
            ${this.projects.map(
              (p) => html`
                <project-row
                  year=${p.year}
                  projectName=${p.projectName}
                  projectUrl=${p.projectUrl}
                  madeAt=${p.madeAt}
                  .builtWith=${p.builtWith}
                  linkUrl=${p.linkUrl}
                  linkLabel=${p.linkLabel}
                ></project-row>
              `
            )}
          </tbody>
        </table>
      </page-shell>
      <p>aaaaa</p>
    `;
  }
}
customElements.define('archive-page', ArchivePage);