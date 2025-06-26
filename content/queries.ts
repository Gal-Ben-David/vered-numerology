import { ActivitiesQuery } from '../types'
import { contentGqlFetcher } from './fetch'

export const getContentForActivities = async () => {
  const query = `#graphql
    query {
   activitiesCollection {
      items {
        title
        description
      }
    }
  }`

  const data = await contentGqlFetcher<ActivitiesQuery>({ query })
  if (!data) {
    throw new Error('No fetched data')
  }

  return data
}