// Specific types(interfaces) and values(enum) for props values


export enum SelectedPage {
    Home = "home",
    Benefits = "benefits",
    Lessions = "lessions",
    Contact = "contact",
  }
  
  export interface BenefitType {
    icon: JSX.Element;
    title: string;
    description: string;
  }
  
  export interface ClassType {
    name: string;
    description?: string;
    image: string;
  }