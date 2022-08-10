// If you don't want to use TypeScript you can delete this file!
import { graphql, PageProps } from "gatsby"
import * as React from "react"

import About from "../components/About"
import Contact from "../components/Contact"
import Layout from "../components/Layout"
import Portfolio from "../components/Portfolio"
import Seo from "../components/Seo"
import TechStack from "../components/TechStack"

type DataProps = {
  contentfulPortfolio: {
    description: string
  }
  site: {
    buildTime: string
  }
}

const UsingTypescript: React.FC<PageProps<DataProps>> = ({ data }) => {
  const { description } = data.contentfulPortfolio
  return (
    <Layout>
      <Seo title="Paolo Vincent Julian" />
      <About />
      <TechStack />
      <Portfolio />
      <Contact />
    </Layout>
  )
}

export default UsingTypescript

export const query = graphql`
  {
    contentfulPortfolio {
      description
    }
    site {
      buildTime(formatString: "YYYY-MM-DD hh:mm a z")
    }
  }
`
