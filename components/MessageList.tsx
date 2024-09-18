"use client";

import { Message } from "ai/react";
import React from "react";
import MarkdownRenderer from "./MarkdownRenderer";
import { FileText, Copy, Sparkles } from "lucide-react";
import { useUser } from "@clerk/nextjs";
import Image from "next/image";

type Props = {
  messages: Message[];
};

const UserMessage = ({
  content,
  imageUrl,
}: {
  content: string;
  imageUrl?: string;
}) => {
  const copyToClipboard = () => {
    navigator.clipboard.writeText(content);
    // Optionally, add a toast notification here
  };

  return (
    <div className="flex flex-col items-end">
      <div className="flex items-center justify-end group">
        <div className="relative max-w-[80%]">
          <div className="bg-gray-100 rounded-lg px-4 py-2 shadow-md">
            <MarkdownRenderer content={content} />
          </div>
        </div>
        {imageUrl && (
          <Image
            src={imageUrl}
            alt="User avatar"
            width={28}
            height={28}
            className="rounded-full ml-2 shadow-sm"
          />
        )}
      </div>
      <button
        onClick={copyToClipboard}
        className="opacity-50 hover:opacity-100 transition-opacity duration-200 mr-9 mt-2"
      >
        <Copy className="w-4 h-4 text-gray-500 hover:text-gray-700" />
      </button>
    </div>
  );
};

const AssistantMessage = ({ content }: { content: string }) => {
  return (
    <div className="flex items-start justify-start text-gray-600">
      <div className="w-7 h-7 rounded-full bg-orange-100 flex items-center justify-center mr-2">
        <Sparkles className="w-5 h-5 text-orange-500" />
      </div>
      <div className="relative max-w-[80%]">
        <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-orange-300 via-orange-200 to-yellow-200 backdrop-blur-md"></div>
        <div className="absolute inset-0 rounded-lg bg-white/10"></div>
        <div
          className="absolute inset-0 rounded-lg"
          style={{
            backgroundImage:
              "radial-gradient(circle at top left, rgba(255,255,255,0.2) 0%, transparent 50%)",
            backgroundSize: "200% 200%",
            backgroundPosition: "top left",
          }}
        ></div>
        <div className="relative rounded-lg px-4 py-2 shadow-lg backdrop-blur-sm">
          <MarkdownRenderer content={content} />
        </div>
      </div>
    </div>
  );
};

const MessageList = ({ messages }: Props) => {
  const { user } = useUser();

  if (messages.length == 0)
    return (
      <div className="flex flex-col justify-center items-center h-full text-gray-500">
        <FileText className="w-12 h-12 mb-4 text-orange-500/70" />
        <h1 className="text-2xl font-bold">Welcome to IntellectAI!</h1>
        <p className="text-lg mt-2">Ask AI about the PDF to get started.</p>
      </div>
    );

  return (
    <div className="flex text-sm bg-white rounded-t-md py-4 flex-col gap-4 px-4 h-full">
      {messages.map((message) => {
        if (message.role === "user") {
          return (
            <UserMessage
              key={message.id}
              content={message.content}
              imageUrl={user?.imageUrl}
            />
          );
        } else {
          return (
            <AssistantMessage key={message.id} content={message.content} />
          );
        }
      })}
    </div>
  );
};

export default MessageList;
