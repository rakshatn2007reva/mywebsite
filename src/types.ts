export interface Project {
  id: string;
  number: string;
  title: string;
  category: string;
  description: string;
  tags: string[];
  githubUrl?: string;
  colorScheme: 'primary' | 'secondary' | 'tertiary';
  overviewDetails: {
    summary: string;
    keyFeatures: string[];
    technologiesUsed: string[];
    futureEnhancements: string[];
  };
}

export interface EducationItem {
  id: string;
  period: string;
  isCurrent?: boolean;
  degree: string;
  institution: string;
  scoreLabel: string;
  scoreValue: string;
  isCgpa?: boolean;
  color: 'primary' | 'secondary' | 'tertiary';
}

export interface Hobby {
  id: string;
  title: string;
  description: string;
  iconName: string;
  color: 'primary' | 'secondary' | 'tertiary';
}
