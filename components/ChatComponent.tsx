"use client";
import React from "react";
import { Input } from "./ui/input";
import { useChat } from "ai/react";
import { Button } from "./ui/button";
import { Loader2, Send } from "lucide-react";
import MessageList from "./MessageList";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Message } from "ai";

type Props = { chatId: number };

const ChatComponent = ({ chatId }: Props) => {
  const { data } = useQuery({
    queryKey: ["chat", chatId],
    queryFn: async () => {
      const response = await axios.post<Message[]>("/api/getMessages", {
        chatId,
      });
      return response.data;
    },
  });

  const { input, handleInputChange, handleSubmit, messages, isLoading } =
    useChat({
      body: {
        chatId,
      },
      initialMessages: data || [],
    });

  React.useEffect(() => {
    const messageContainer = document.getElementById("message-container");
    if (messageContainer) {
      messageContainer.scrollTo({
        top: messageContainer.scrollHeight,
        behavior: "smooth",
      });
    }
  }, [messages]);
  return (
    <div className="h-full flex flex-col bg-orange-50">
      {/* header */}
      <div className="sticky top-0 bg-orange-50 text-black inset-x-0 pl-1 h-fit flex items-center">
        <h3 className="text-2xl font-semibold mx-2 my-1">AI Chat</h3>
        {isLoading && (
          <Loader2 className="h-5 w-5 text-pink-500 animate-spin" />
        )}
      </div>

      {/* message list */}
      <div
        className="overflow-auto h-[87.5%] bg-white pb-4 rounded-t-lg border-t border-orange-300 custom-scrollbar mx-2"
        id="message-container"
      >
        <MessageList messages={messages} />
      </div>

      <form
        onSubmit={handleSubmit}
        className="sticky bottom-0 inset-x-0 px-2 mb-2 text-black"
      >
        <div className="flex bg-white px-2 py-2 rounded-b-lg">
          <Input
            value={input}
            onChange={handleInputChange}
            placeholder="Ask any question..."
            className="w-full rounded-full "
          />
          <Button className="bg-orange-500 rounded-full ml-2">
            <Send className="h-4 w-4" />
          </Button>
        </div>
      </form>
    </div>
  );
};

export default ChatComponent;
