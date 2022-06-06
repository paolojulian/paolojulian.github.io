// If you don't want to use TypeScript you can delete this file!
import * as React from "react"
import { PageProps, graphql } from "gatsby"

import Layout from "../components/Layout"
import Seo from "../components/seo"
import About from "../components/About"

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
