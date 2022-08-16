// If you don't want to use TypeScript you can delete this file!
import { graphql, PageProps } from "gatsby"
import * as React from "react"

import Seo from "../components/atoms/Seo"
import About from "../components/organisms/About"
import Contact from "../components/organisms/Contact"
import Portfolio from "../components/organisms/Portfolio"
import TechStack from "../components/organisms/TechStack"
import Layout from "../components/templates/Layout/index"

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
