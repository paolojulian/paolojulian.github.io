import apolloClient from "lib/graphql";
import { gql } from "@apollo/client";
import { BlogPostCollection } from "../types/contentful";
import { APIResponse, IAPIResponse } from "utils/api";

export async function getBlogPostSlugs(): Promise<IAPIResponse<BlogPostCollection[]>> {
  const entries = await apolloClient.query({
    query: gql`
      query GetBlogPostSlugs {
        blogPostCollection {
            items {
              slug
            }
        }
      }
    `
  })

  return APIResponse(true, entries.data.blogPostCollection.items)
}

export async function getLatestBlogPosts(limit = 5): Promise<IAPIResponse<BlogPostCollection[]>> {
  try {

    const entries = await apolloClient.query({
      query: gql`
      query GetLatestBlogPosts($limit: Int!) {
        blogPostCollection(limit: $limit) {
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
        limit
      }
    })

    return APIResponse(true, entries.data.blogPostCollection.items);
  } catch (e) {
    console.error(JSON.stringify(e))
    throw e
  }
}

export async function getBlogPostBySlug(slug: string): Promise<IAPIResponse<BlogPostCollection, any>> {
  try {
    const response = await apolloClient.query({
      query: gql`
        query GetBlogPostBySlug($slug: String!) {
          blogPostCollection(limit: 1, where: { slug: $slug }) {
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