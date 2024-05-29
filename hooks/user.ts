'use client'

import { useQuery } from "@tanstack/react-query";
import { graphqlClient } from "../gClient/api";
import { getCurrentUserQuery } from "../graphql/query/user";

export const useCurrentUser = () => {
  const query = useQuery({
    queryKey: ["current-user"],
    queryFn: () => graphqlClient.request(getCurrentUserQuery),
  });

  return { ...query, user: query.data?.getCurrentUser };
};
