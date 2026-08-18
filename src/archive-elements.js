import { LitElement, html, css } from 'lit';
import { icons } from './icons.js';
import { projectArchive } from './data';

/* PageShell (layout wrapper)*/
export class PageShell extends LitElement {
  static styles = css`
    :host {
      display: block;
      min-height: 100vh;
      color: #94a3b8;
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

/* BackLink */
export class BackLink extends LitElement {
  static properties = {
    href: { type: String },
    label: { type: String }
  };

  constructor() {
    super();
    this.href = '/';
    this.label = 'Back';
  }

  static styles = css`
    .back-link {
      display: inline-flex;
      align-items: center;
      font-weight: 600;
      color: var(--teal-300, #5eead4);
      text-decoration: none;
      margin-bottom: 0rem;
      font-size: 0.875rem;
      transition: color 0.2s;
    }
    .back-link svg {
      width: 1rem;
      height: 1rem;
      margin-right: 0.5rem;
      transform: rotate(180deg);
      transition: transform 0.2s;
    }
    .back-link:hover {
      color: var(--teal-400, #2dd4bf);
    }
    .back-link:hover svg {
      transform: rotate(180deg) translateX(0.25rem);
    }
  `;

  render() {
    return html`
      <a href="${this.href}" class="back-link" aria-label="Back to ${this.label}">
        ${icons["straightArrow"]}
        ${this.label}
      </a>
    `;
  }
}
customElements.define('back-link', BackLink);

/* SectionTitle */
export class SectionTitle extends LitElement {
  static styles = css`
    h1 {
      font-size: 2.25rem;
      font-weight: 700;
      letter-spacing: -0.025em;
      color: var(--slate-200, #e2e8f0);
      margin-bottom: 2rem;
      margin-top: 0rem;
    }
    @media (min-width: 640px) {
      h1 { font-size: 3rem; }
    }
  `;

  render() {
    return html`<h1><slot></slot></h1>`;
  }
}
customElements.define('section-title', SectionTitle);

/* ProjectTable */
export class ProjectTable extends LitElement {
  static properties = {
    projects: { type: Array }
  };

  constructor() {
    super();
    this.projects = [];
  }

  static styles = css`
    table {
      width: 100%;
      border-collapse: collapse;
      text-align: left;
    }

    thead {
      position: sticky;
      top: 0;
      z-index: 10;
      border-bottom: 1px solid rgba(148, 163, 184, 0.1);
      backdrop-filter: blur(8px);
    }
    th {
      padding: 1rem 0.5rem 1rem 0;
      font-size: 0.875rem;
      font-weight: 600;
      color: var(--slate-200, #e2e8f0);
      text-align: left;
    }

    /* hide tags first, then description & link */
    .tags-col,
    .desc-col,
    .link-col {
      display: none;
    }

    @media (min-width: 640px) {
      .desc-col,
      .link-col {
        display: table-cell;
      }
    }

    @media (min-width: 1024px) {
      .tags-col {
        display: table-cell;
      }
    }

    tbody tr {
      border-bottom: 1px solid rgba(148, 163, 184, 0.1);
    }
    tbody tr:last-child {
      border-bottom: none;
    }

    td {
      padding: 1rem 0.5rem 1rem 0;
      vertical-align: top;
      font-size: 0.875rem;
    }

    .year-cell {
      color: var(--slate-400, #94a3b8);
      white-space: nowrap;
    }

    .project-cell {
      font-weight: 600;
      color: var(--slate-200, #e2e8f0);
      line-height: 1.375;
    }

    /* Mobile: project name becomes a LinkItem; desktop: plain name */
    .mobile-link {
      display: block;
    }
    .desktop-name {
      display: none;
    }
    @media (min-width: 640px) {
      .mobile-link { display: none; }
      .desktop-name { display: block; }
    }

    .desc-cell {
      color: var(--slate-400, #94a3b8);
      line-height: 1.5;
      max-width: 40rem;
    }

    .built-with-list {
      display: flex;
      flex-wrap: wrap;
      list-style: none;
      margin: 0;
      padding: 0;
      transform: translateY(-0.125rem);
    }
    .built-with-list li {
      margin: 0;
    }

    .link-cell {
      white-space: nowrap;
    }
  `;

  render() {
    return html`
      <table id="main-content">
        <thead>
          <tr>
            <th>Year</th>
            <th>Project</th>
            <th class="desc-col">Description</th>
            <th class="tags-col">Built with</th>
            <th class="link-col">Link</th>
          </tr>
        </thead>
        <tbody>
          ${this.projects.map(project => html`
            <tr>
              <td class="year-cell">${project.year}</td>
              <td class="project-cell">
                <span class="mobile-link">
                  ${project.projectUrl
                    ? html`<link-item
                        text=${project.projectName}
                        link=${project.projectUrl}
                        bold=${true}
                      ></link-item>`
                    : project.projectName}
                </span>
                <span class="desktop-name">${project.projectName}</span>
              </td>
              <td class="desc-cell desc-col">${project.description}</td>
              <td class="built-with-cell tags-col">
                <ul class="built-with-list">
                  ${project.builtWith.map(tech => html`<li><tech-tag name=${tech}></tech-tag></li>`)}
                </ul>
              </td>
              <td class="link-cell link-col">
                ${project.linkUrl
                  ? html`<link-item
                      text=${project.linkLabel}
                      link=${project.linkUrl}
                      svg = ${project.hasSvg}
                      svgName=${project.linkIcon}
                    ></link-item>`
                  : ''}
              </td>
            </tr>
          `)}
        </tbody>
      </table>
    `;
  }
}
customElements.define('project-table', ProjectTable);

/* ArchivePage */
export class ArchivePage extends LitElement {
  constructor() {
    super();
    this.projects = projectArchive;
  }

  static properties = {
    projects: { type: Array }
  };

  render() {
    return html`
      <page-shell>
        <back-link href="/" label="Alaeddine Cheniour"></back-link>
        <section-title>All Projects</section-title>
        <project-table .projects=${this.projects}></project-table>
      </page-shell>
    `;
  }
}
customElements.define('archive-page', ArchivePage);