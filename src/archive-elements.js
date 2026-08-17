import { LitElement, html, css } from 'lit';

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
        description: 'A digital platform for the philanthropic organization, featuring stories, initiatives, and resources.',
        builtWith: ['Next.js', 'TypeScript', 'SCSS', 'Contentful'],
        linkUrl: 'https://www.emersoncollective.com/',
        linkLabel: 'emersoncollective.com'
      },
      {
        year: '2022',
        projectName: 'Harvard Business School Design System',
        projectUrl: '',
        description: 'A comprehensive design system and component library for Harvard Business School digital products.',
        builtWith: ['Storybook', 'React', 'TypeScript'],
        linkUrl: '',
        linkLabel: ''
      }
    ];
  }

  static styles = css`
    :host {
      display: block;
    }

    /* Back link – consistent with LinkItem */
    .back-link {
      display: inline-flex;
      align-items: center;
      font-weight: 600;
      color: var(--teal-300, #5eead4);
      text-decoration: none;
      margin-bottom: 1rem;
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

    h1 {
      font-size: 2.25rem;
      font-weight: 700;
      letter-spacing: -0.025em;
      color: var(--slate-200, #e2e8f0);
      margin: 0 0 3rem 0;
    }
    @media (min-width: 640px) {
      h1 { font-size: 3rem; }
    }

    /* Table */
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
      background: rgba(15, 23, 42, 0.75);
      backdrop-filter: blur(8px);
    }
    th {
      padding: 1rem 0.5rem 1rem 0;
      font-size: 0.875rem;
      font-weight: 600;
      color: var(--slate-200, #e2e8f0);
      text-align: left;
    }

    /* Responsive column visibility – hide tags first, then description & link */
    .tags-col,
    .desc-col,
    .link-col {
      display: none;
    }

    /* Medium screens: show description and link, hide tags */
    @media (min-width: 640px) {
      .desc-col,
      .link-col {
        display: table-cell;
      }
    }

    /* Large screens: show all columns including tags */
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

    /* Mobile: project name becomes a LinkItem, desktop: plain name */
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

    .built-with-cell {
      /* container for tags */
    }

    .built-with-list {
      display: flex;
      flex-wrap: wrap;
      list-style: none;
      margin: 0;
      padding: 0;
      /* tighter vertical alignment */
      transform: translateY(-0.125rem);
    }
    .built-with-list li {
      margin: 0; /* rely on tech-tag's own margin for spacing */
    }

    .link-cell {
      white-space: nowrap;
    }
  `;

  render() {
    return html`
      <page-shell>
        <skip-link></skip-link>

        <!-- Back link -->
        <a href="/" class="back-link" aria-label="Back to Aladin">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fill-rule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clip-rule="evenodd"></path>
          </svg>
          Aladin
        </a>

        <!-- Main heading -->
        <h1>All Projects</h1>

        <!-- Table -->
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
                      ? html`<link-item text=${project.projectName} link=${project.projectUrl} svg></link-item>`
                      : project.projectName}
                  </span>
                  <span class="desktop-name">${project.projectName}</span>
                </td>
                <td class="desc-cell">${project.description}</td>
                <td class="built-with-cell">
                  <ul class="built-with-list">
                    ${project.builtWith.map(tech => html`<li><tech-tag name=${tech}></tech-tag></li>`)}
                  </ul>
                </td>
                <td class="link-cell">
                  ${project.linkUrl
                    ? html`<link-item text=${project.linkLabel} link=${project.linkUrl} svg></link-item>`
                    : ''}
                </td>
              </tr>
            `)}
          </tbody>
        </table>
      </page-shell>
    `;
  }
}
customElements.define('archive-page', ArchivePage);