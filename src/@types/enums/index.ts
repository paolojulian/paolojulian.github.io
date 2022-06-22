import { IGatsbyImageData } from "gatsby-plugin-image";

export type ContentfulRepeater = {
  id: string;
  key: string;
  value: string;
}

export type PortfolioItem = {
  id: string;
  title: string;
  description: {
    description: string;
  }
  stack: string;
  thumbnail: {
    id: string;
    url: string;
    gatsbyImage: IGatsbyImageData
  }
}

export type JobSkill = { value: number } & ContentfulRepeater