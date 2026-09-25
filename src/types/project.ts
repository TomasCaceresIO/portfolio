export interface ProjectLink {
  label: string;
  url: string;
  type: 'github' | 'live' | 'download' | 'docs' | 'external';
}

export interface Metric {
  label: string;
  value: string;
  description?: string;
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  featured: boolean;
  status: 'active' | 'in-progress' | 'roadmap' | 'completed';
  category: 'Local-First Systems' | 'Machine Learning & AI' | 'Data Engineering' | 'Autonomous Agents';
  summary: string;
  problem: string;
  pipeline: string;
  architecture: string;
  mlRoadmap: string;
  technologies: string[];
  metrics: Metric[];
  links: ProjectLink[];
}
