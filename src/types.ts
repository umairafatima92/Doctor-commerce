export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface ServiceCategory {
  id: string;
  name: string;
  description: string;
  services: Service[];
}

export interface Project {
  id: string;
  title: string;
  category: 'ecommerce' | 'tech' | 'design';
  serviceType: string;
  description: string;
  longDescription: string;
  image: string;
  stats?: { label: string; value: string }[];
  technologies: string[];
  client: string;
  link?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  avatar: string;
}

export interface Stat {
  label: string;
  value: string;
  description: string;
}
