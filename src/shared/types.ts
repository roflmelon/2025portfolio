import { JSX } from 'react';

export enum SelectedPage{
  HERO = "hero",
  MYEXPERTISE = "myexpertise",
  ABOUT = "about",
  MYPORTFOLIO = "myportfolio",
  CONTACTME = "contactme"
}

export interface AboutMe {
  icon: JSX.Element,
  title: string,
  description: string
}

export interface PortfolioType {
  project: string,
  description?: string,
  image: string,
}