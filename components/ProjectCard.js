export default function ProjectCard({ project }) {
  return (
    <article className="project-card">
      <div className="project-card-header">
        <h3>{project.name}</h3>
        <span className="project-category">{project.category}</span>
      </div>
      <p>{project.description}</p>
      <div className="project-tags">
        {(project.tags || []).map((tag) => (
          <span key={tag} className="project-tag">{tag}</span>
        ))}
      </div>
    </article>
  );
}
