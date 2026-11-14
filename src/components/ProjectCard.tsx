import { Link } from 'react-router-dom';
import { ArrowUpRight, Github } from './Icons';
import { motion } from 'framer-motion';
import ProjectVisual from './ProjectVisual';
import type { projects } from '../data/portfolio';
type Project = typeof projects[number];
export default function ProjectCard({project,index}:{project:Project;index:number}) {
 return <motion.article className={`project-card project-${project.visual}`} initial={{opacity:0,y:24}} whileInView={{opacity:1,y:0}} viewport={{once:true,amount:.12}} transition={{duration:.6,delay:index*.08}}>
  <Link to={`/projects/${project.slug}`} className="project-art-link" aria-label={`View ${project.title} project`}><ProjectVisual type={project.visual}/><span className="art-open"><ArrowUpRight size={18}/></span></Link>
  <div className="project-meta"><span>{project.number} / {project.type}</span><span>{project.date}</span></div>
  <div className="project-card-bottom"><div><h3>{project.title}</h3><p>{project.subtitle}</p></div><div className="project-actions"><a href={project.github} target="_blank" rel="noreferrer" aria-label="GitHub repository"><Github size={17}/></a><Link to={`/projects/${project.slug}`} aria-label="View project details"><ArrowUpRight size={19}/></Link></div></div>
  <div className="tag-row">{project.stack.map(s=><span className="tag" key={s}>{s}</span>)}</div>
 </motion.article>
}
