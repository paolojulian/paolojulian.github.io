import { ApolloClient, InMemoryCache } from '@apollo/client';

const SPACE = process.env.CONTENTFUL_SPACE_ID;

const TOKEN = process.env.CONTENTFUL_ACCESS_TOKEN;
const URL = `https://graphql.contentful.com/content/v1/spaces/${SPACE}`;

const PREVIEW_TOKEN = process.env.CONTENTFUL_PREVIEW_TOKEN;

const cache = new InMemoryCache()

const apolloClient = ({ preview = false }: { preview?: boolean } = {}) => new ApolloClient({
  uri: URL,
  headers: {
    Authorization: `Bearer ${preview ? PREVIEW_TOKEN : TOKEN}`
  },
  cache: preview ? new InMemoryCache() : cache,
})

export default apolloClient