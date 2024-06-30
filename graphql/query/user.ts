import { graphql } from "../../gql";
import { User } from "../../gql/graphql";

export const verifyGoogleTokenQuery = graphql(`
  #graphql
  query VerifyGoogleToken($token: String!) {
    verifyGoogleToken(token: $token)
  }
`);

export const getCurrentUserQuery = graphql(`
  #graphql
  query GetCurrentUser {
    getCurrentUser {
      id
      profileImageURL
      email
      firstName
      lastName
      tweets {
        id
        content
        author {
          firstName
          lastName
          profileImageURL
        }
      }
    }
  }
`);

export const getUserByIdQuery = graphql(`
  #graphql
  query GetUserById($id: ID!) {
    getUserById(id: $id) {
      id
      firstName
      lastName
      profileImageURL
      tweets {
        id
        content
        author {
          firstName
          lastName
          profileImageURL
        }
      }
    }
  }
`);


export type UserResponse = {
  getUserById: User;
};