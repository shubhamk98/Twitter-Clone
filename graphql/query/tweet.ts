import { graphql } from "../../gql";

export const getAllTweetsQuery = graphql(`
  #graphql
  query GetAllTweet {
    getAllTweet {
      id
      content
      imageUrl
      author {
        id
        firstName
        lastName
        profileImageURL
      }
    }
  }
`);
