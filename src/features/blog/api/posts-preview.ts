import apolloClient from "lib/contentful";
import { gql } from "@apollo/client";
import { BlogPostCollection } from "../types/contentful";
import { APIResponse, IAPIResponse } from "utils/api";


export async function getBlogPostSlugs(): Promise<IAPIResponse<BlogPostCollection[]>> {
  const apiClient = apolloClient({ preview: true });
  const entries = await apiClient.query({
    query: gql`
      query GetBlogPostSlugs {
        blogPostCollection(preview: true) {
            items {
              slug
            }
        }
      }
    `
  })

  return APIResponse(true, entries.data.blogPostCollection.items)
}


export async function getBlogPostBySlug(slug: string): Promise<IAPIResponse<BlogPostCollection, any>> {
  const apiClient = apolloClient({ preview: true });
  try {
    const response = await apiClient.query({
      query: gql`
        query GetBlogPostBySlug($slug: String!) {
          blogPostCollection(limit: 1, where: { slug: $slug }, preview: true) {
            items {
              title
              content
              description
              slug
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
      return APIResponse(false, null, 'not-found')
    }

    return APIResponse(true, response.data.blogPostCollection.items[0])
  } catch (error) {
    console.error('Error fetching blog post', JSON.stringify(error))
    return APIResponse(false, null, error)
  }
}