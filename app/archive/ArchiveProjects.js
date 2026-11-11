'use client';

import { useMemo, useState } from 'react';

const lenses = [
  { id: 'all', label: 'All work' },
  { id: 'strategy', label: 'Strategy & Partnerships' },
  { id: 'creative', label: 'Creative & Concepts' },
  { id: 'content', label: 'Content & Social' },
  { id: 'experience', label: 'Events & Experiences' },
];

export default function ArchiveProjects({ projects }) {
  const [active, setActive] = useState('all');
  const shown = useMemo(
    () => active === 'all' ? projects : projects.filter((p) => p.lenses.includes(active)),
    [projects, active]
  );

  return (
    <div className="work-collection">
      <div className="work-browse-top">
        <p>FIND YOUR WAY IN</p>
        <p>PROJECTS / CONCEPTS / SELECTED THINKING</p>
      </div>

      <div className="work-filters" role="group" aria-label="Filter work by discipline">
        {lenses.map((lens) => (
          <button
            type="button"
            key={lens.id}
            className={active === lens.id ? 'work-filter is-active' : 'work-filter'}
            aria-pressed={active === lens.id}
            onClick={() => setActive(lens.id)}
          >{lens.label}</button>
        ))}
      </div>

      <div className="work-results-meta" aria-live="polite">
        <span>{shown.length} {shown.length === 1 ? 'PROJECT' : 'PROJECTS'}</span>
        <span>{lenses.find((lens) => lens.id === active)?.label}</span>
      </div>

      <div className={active === 'all' ? 'work-grid' : 'work-grid work-grid-filtered'}>
        {shown.map((project, i) => {
          const hasPage = Boolean(project.href);
          const classes = ['work-card', project.size || '', project.coverClass || '', !hasPage ? 'work-card-pending' : ''].filter(Boolean).join(' ');
          const art = (
            <div className="work-card-art">
              {project.image ? (
                <img src={project.image} alt="" loading={i < 2 ? 'eager' : 'lazy'} />
              ) : (
                <div className="work-f1-art" aria-hidden="true">
                  <span>WHO CONTROLS</span>
                  <strong>FORMULA 1?</strong>
                  <small>GOVERNANCE / REGULATION / COMMERCIAL POWER</small>
                </div>
              )}
              {hasPage && <span className="work-open" aria-hidden="true">VIEW PROJECT ↗</span>}
              {!hasPage && <span className="work-soon">CASE PAGE IN DEVELOPMENT</span>}
            </div>
          );
          const meta = (
            <div className="work-card-meta">
              <div>
                <p>{project.discipline} <span aria-hidden="true">/</span> {project.type}</p>
                <h2>{project.title}</h2>
              </div>
              <span className="work-card-index">{project.number}</span>
            </div>
          );
          return hasPage
            ? <a className={classes} href={project.href} key={project.id} aria-label={project.title + ', ' + project.type}>{art}{meta}</a>
            : <article className={classes} key={project.id}>{art}{meta}</article>;
        })}
      </div>
      {shown.length === 0 && <p className="work-empty">There are no projects in this collection yet.</p>}
    </div>
  );
}
