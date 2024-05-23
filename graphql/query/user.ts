import { graphql } from "../../gql";


export const verifyGoogleTokenQuery = graphql(`
    query GoogleTokenQuery($token: String!) {
        verifyGoogleToken(token: $token)
    }
`);
