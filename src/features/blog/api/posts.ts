import apolloClient from "lib/graphql";
import { gql } from "@apollo/client";
import contentfulClient from "../lib/contentful";

export async function getBlogPosts() {
  const entries = await contentfulClient.getEntries({
    content_type: 'blogPost'
  })

  return {
    ok: true,
    data: entries.items
    // }
  }
}

export async function getBlogPostBySlug(slug: string) {
  try {
    const response = await apolloClient.query({
      query: gql`
        query GetBlogPostBySlug($slug: String!) {
          blogPostCollection(limit: 1, where: { slug: $slug }) {
            items {
              title
              content
              sys {
                publishedAt
              }
            }
          }
        }
      `,
      variables: {
        slug
      }
    })

    if (response.data.blogPostCollection.items.length === 0) {
      return {
        ok: false,
        error: 'not-found'
      }
    }

    return {
      ok: true,
      data: response.data.blogPostCollection.items[0]
    }
  } catch (error) {
    console.error('Error fetching blog post', JSON.stringify(error))
    return {
      ok: false,
      error
    }
  }
}