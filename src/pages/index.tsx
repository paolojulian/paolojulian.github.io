import * as React from "react"
import { PageProps, graphql } from "gatsby"

import Seo from "../components/seo"
import Layout from "../components/Layout"

export interface HomeProps {
  site: {
    buildTime: String;
  }
}

const UsingTypescript: React.FC<PageProps<HomeProps>> = ({ data }) => {
  console.log(data)
  return (
    <Layout>
      <Seo
        title="Paolo Vincent Julian"
        description="Paolo Vincent Julian's portfolio website, contains list of project and hobbies"
      />
      {/* <Preloader /> */}
      <div className="h-screen text-white z-10">Test</div>
    </Layout>
  )
}

export default UsingTypescript

export const query = graphql`
  {
    site {
      buildTime(formatString: "YYYY-MM-DD hh:mm a z")
    }
  }
`
