import { ReactNode } from "react";

export type Vacancy = {
  id: number;
  company_logo: string;
  company_name: string;
  created_at: ReactNode;
  position: string;
  contract: string;
  location: string;
  languages: string[];
};
