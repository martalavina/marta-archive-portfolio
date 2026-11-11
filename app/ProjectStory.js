import './story.css';
import HomeNav from './HomeNav';

export default function ProjectStory({ story }) {
  return (
    <div className="story-page" style={{'--accent':story.accent || '#dbe5e0','--hero-highlight':story.highlight || '#934f4c'}}>
      <HomeNav brandHref="/" />
      <main className="story-shell">
        <div className="story-topline"><span><a href="/archive">← ALL WORK</a></span><span>{story.meta}</span></div>
        <header className="story-hero">
          <p className="story-eyebrow">{story.eyebrow}</p>
          <div className="story-hero-grid">
            <h1>{story.title}{story.titleAccent && <> <em>{story.titleAccent}</em></>}</h1>
            <div><p className="story-lead">{story.lead}</p><p className="story-role">{story.role}</p></div>
          </div>
          {story.image ? (
            <figure className={'story-cover'+(story.wide ? ' story-cover--wide':'')}>
              <img src={story.image} alt={story.imageAlt || story.title} width="1200" height="675" />
            </figure>
          ) : (
            <div className="story-cover story-cover--f1" role="img" aria-label="Typographic cover: Who controls Formula 1?">
              <span>WHO CONTROLS</span><strong>FORMULA 1?</strong><small>GOVERNANCE · REGULATION · COMMERCIAL POWER</small>
            </div>
          )}
          {story.disclaimer && <p className="story-disclaimer">{story.disclaimer}</p>}
          <nav className="story-nav" aria-label="On this page">
            {story.sections.map((section,i)=><a href={'#story-'+i} key={section.label}>{section.short || section.label}</a>)}
          </nav>
        </header>

        {story.sections.map((section,i)=>(
          <section className="story-section" id={'story-'+i} key={section.label}>
            <div className="story-section-head">
              <div className="story-count">{String(i+1).padStart(2,'0')} / {section.label}</div>
              <div><h2>{section.title}</h2><p className="story-section-intro">{section.copy}</p></div>
            </div>
            {section.statement && <p className="story-idea">{section.statement}</p>}
            {section.cards && <div className="story-card-grid">{section.cards.map((card,j)=>
              <article className="story-card" key={card.title}><span className="story-card-number">{String(j+1).padStart(2,'0')}</span><h3>{card.title}</h3><p>{card.copy}</p></article>
            )}</div>}
            {section.panels && <div className="story-split">{section.panels.map(p=><article key={p.title} className="story-panel"><h3>{p.title}</h3><p>{p.copy}</p></article>)}</div>}
            {section.pills && <div className="story-pills">{section.pills.map(p=><span key={p}>{p}</span>)}</div>}
            {section.metrics && <div className="story-metric-grid">{section.metrics.map(p=><div className="story-metric" key={p.title}><strong>{p.title}</strong><p>{p.copy}</p></div>)}</div>}
          </section>
        ))}
        <div className="story-end"><blockquote>{story.closing}</blockquote><a href="/archive">Explore more work ↗</a></div>
      </main>
      <footer className="story-footer">
        <span>© Marta Laviña 2026</span><span>Sports, brands & experiences.</span>
        <a href="/contact">Get in touch ↗</a>
      </footer>
    </div>
  );
}
