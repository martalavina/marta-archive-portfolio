'use client';

import { useMemo, useState } from 'react';

const filters = ['ALL', 'SPONSORSHIP', 'FAN EXPERIENCE', 'EVENTS', 'BRAND', 'CAMPAIGNS', 'RESEARCH'];

function Arrow() {
  return <span className="ui-arrow ui-arrow-up-right" aria-hidden="true" />;
}

function entryLabel(project) {
  if (project.type === 'NOTE') return 'READ NOTE';
  if (project.type === 'STUDY') return 'READ STUDY';
  return 'READ FULL CASE';
}

export default function ArchiveProjects({ projects }) {
  const [activeFilter, setActiveFilter] = useState('ALL');

  const visibleProjects = useMemo(() => {
    if (activeFilter === 'ALL') return projects;
    return projects.filter((project) => project.themes?.includes(activeFilter));
  }, [activeFilter, projects]);

  return (
    <>
      <section className="archive-lenses shell section-rule">
        <p className="eyebrow">BROWSE THE ARCHIVE</p>
        <div className="archive-lens-list" aria-label="Filter archive by theme">
          {filters.map((filter) => (
            <button
              key={filter}
              type="button"
              className={activeFilter === filter ? 'archive-lens-active' : ''}
              aria-pressed={activeFilter === filter}
              onClick={() => setActiveFilter(filter)}
            >
              {filter}
            </button>
          ))}
        </div>
      </section>

      <section className="archive-index shell section-rule" aria-live="polite">
        <div className="archive-index-heading">
          <span>INDEX</span>
          <span>{String(visibleProjects.length).padStart(2, '0')} {visibleProjects.length === 1 ? 'ENTRY' : 'ENTRIES'}</span>
        </div>

        {visibleProjects.map((project) => {
          const originalIndex = projects.findIndex((item) => item.code === project.code);
          return (
            <article id={project.id} className={`archive-project archive-project-${project.weight}`} key={project.code}>
              <div className="archive-project-num">{String(originalIndex + 1).padStart(2, '0')}</div>
              <div className="archive-project-main">
                <p className="entry-meta">{project.code} · {project.date} · {project.type}</p>
                <p className="archive-project-category">{project.category}</p>
                <h2>{project.headline}</h2>
                <p className="archive-project-client">{project.client}</p>
                <p className="archive-project-title">{project.title}</p>
                <p className="archive-project-description">{project.description}</p>
                <a className="archive-project-link" href={project.href}>{entryLabel(project)} <Arrow /></a>
              </div>
              {project.weight === 'feature' && (
                <div className="archive-feature-mark" aria-hidden="true">
                  <span>FEATURED</span>
                  <span>{project.code}</span>
                </div>
              )}
            </article>
          );
        })}

        {visibleProjects.length === 0 && (
          <p className="archive-empty">No entries in this lens yet.</p>
        )}
      </section>
    </>
  );
}
