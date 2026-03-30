export interface Service {
  id: string;
  title: string;
  description: string;
  icon?: string;
  packages?: ServicePackage[];
}

export interface ServicePackage {
  id: string;
  name: string;
  price?: string;
  description: string;
  features: string[];
  highlight?: boolean;
}
