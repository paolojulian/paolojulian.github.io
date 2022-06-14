// If you don't want to use TypeScript you can delete this file!
import * as React from "react"
import { PageProps, graphql } from "gatsby"

import Layout from "../components/Layout"
import Seo from "../components/Seo"
import About from "../components/About"
import Contact from "../components/Contact"
import TechStack from "../components/TechStack"
import Portfolio from "../components/Portfolio"

type DataProps = {
  site: {
    buildTime: string
  }
}

const UsingTypescript: React.FC<PageProps<DataProps>> = ({
  data,
  location,
}) => (
  <Layout>
    <Seo title="Paolo Vincent Julian" />
    <About />
    <TechStack />
    <Portfolio />
    <Contact />
  </Layout>
)

export default UsingTypescript

export const query = graphql`
  {
    site {
      buildTime(formatString: "YYYY-MM-DD hh:mm a z")
    }
  }
`
