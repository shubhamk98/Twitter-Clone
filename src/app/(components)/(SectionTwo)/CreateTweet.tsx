"use client";
import Image from "next/image";
import React, { useCallback, useRef, useState } from "react";
import { useCurrentUser } from "../../../../hooks/user";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { FaRegImages } from "react-icons/fa6";
import { BsStars } from "react-icons/bs";
import { useCreateTweet } from "../../../../hooks/tweet";
import toast from "react-hot-toast";

const aiLink = process.env.NEXT_PUBLIC_GoogleAILink;

const CreateTweet = () => {
  const { user } = useCurrentUser();
  const [content, setContent] = useState("");
  const { mutate } = useCreateTweet();

  const handleAIText = async () => {
    const baseString =
      " -- Make this tweet good with relevent Hashtag and emoji keep character limit to 100-200.";
    const question = content + baseString;
    const toastID = toast.loading("Making Tweet Better!!");

    const data = JSON.stringify({
      contents: [
        {
          parts: [
            {
              text: question,
            },
          ],
        },
      ],
    });
    await fetch(aiLink, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: data,
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data.candidates[0]?.content?.parts[0]?.text);
        setContent(data.candidates[0]?.content?.parts[0]?.text);
        toast.success("Done", { id: toastID });
      })
      .catch((error) => console.error(error));
  };

  const handleSelectImage = useCallback(() => {
    const input = document.createElement("input");
    input.setAttribute("type", "file");
    input.setAttribute("accept", "image/*");
    input.click();
  }, []);

  const handleTweetBtn = useCallback(() => {
    mutate({
      content,
    });
    setContent("");
  }, [mutate, content]);

  return (
    <div className="flex flex-col justify-between gap-2 p-4 border-y-[1px]  border-gray-400 dark:border-gray-800 hover:bg-zinc-900">
      <div className="flex flex-row justify-between gap-4 w-full">
        <div className="w-[50px]">
          {user && (
            <Image
              src={user?.profileImageURL}
              alt="User"
              width={50}
              height={50}
              className="rounded-full"
            />
          )}
        </div>
        <Textarea
          placeholder="What is happening?"
          className="bg-transparent border-none text-xl focus:outline-none focus:ring-0 overflow-auto"
          value={content}
          rows={4}
          onChange={(e) => setContent(e.target.value)}
        />
      </div>
      <hr className="ml-20 pb-2 border-gray-400 dark:border-gray-800" />
      <div className="flex flex-row items-center justify-between  ">
        <div className="flex flex-row gap-4 ml-20 cursor-pointer">
          <FaRegImages
            className="text-zinc-950 dark:text-white"
            size={26}
            onClick={handleSelectImage}
          />
          <BsStars
            className="text-zinc-950 dark:text-white"
            size={26}
            onClick={handleAIText}
          />
        </div>
        <Button onClick={handleTweetBtn}>Tweet</Button>
      </div>
    </div>
  );
};

export default CreateTweet;
