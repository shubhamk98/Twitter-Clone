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

export const getSignedUrlForTweetQuery = graphql(`
  #grapql
  query GetSignedUrl($imageName: String!, $imageType: String!) {
    getSignedUrlForTweet(imageName: $imageName, imageType: $imageType)
  }
`);
