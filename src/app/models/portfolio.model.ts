export interface Portfolio {
  id: string;
  title: string;
  category: 'weddings' | 'events' | 'portraits' | 'videography';
  image: string;
  thumbnail?: string;
  description?: string;
  date?: string;
}

export interface PortfolioCategory {
  id: string;
  name: string;
  icon?: string;
}
