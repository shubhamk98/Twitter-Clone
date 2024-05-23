"use client";
import { CredentialResponse, GoogleLogin } from "@react-oauth/google";
import React, { useCallback } from "react";
import toast from "react-hot-toast";
import { graphqlClient } from "../../../../gClient/api";
import { verifyGoogleTokenQuery } from "../../../../graphql/query/user";

const SectionThree = () => {
  const handleLoginWithGoogle = useCallback(
    async (cred: CredentialResponse) => {
      const googleToken = cred.credential;
      if (!googleToken) {
        return toast.error("Google token not found");
      }
      const { verifyGoogleToken } = await graphqlClient.request(
        verifyGoogleTokenQuery,
        {
          token: googleToken,
        }
      );

      toast.success("verified Success");

      if (verifyGoogleToken) {
        window.localStorage.setItem("twitter_token", verifyGoogleToken);
      }
    },
    []
  );
  return (
    <div>
      <div className="m-5 flex flex-col gap-4">
        <p className="text-left font-semibold">New to Twitter?</p>
        <GoogleLogin
          onSuccess={handleLoginWithGoogle}
          shape="square"
          theme="outline"
          text="continue_with"
          size="medium"
        />
      </div>
    </div>
  );
};

export default SectionThree;
