import { DrizzleChat } from "@/lib/db/schema";
import { cn } from "@/lib/utils";
import { UserButton } from "@clerk/nextjs";
import { MessageCircleMore, PlusCircle, Home } from "lucide-react";
import Link from "next/link";
import React from "react";
import { Separator } from "./ui/separator";

type Props = {
  chats: DrizzleChat[];
  chatId: number;
};

const ChatSideBar = ({ chats, chatId }: Props) => {
  return (
    <div className="w-full h-screen p-4 text-black text-sm bg-orange-50 border-r-[1px] border-r-orange-500 flex flex-col">
      <div className="flex-shrink-0">
        <Link href="/dashboard">
          <button className="bg-white hover:bg-orange-200 w-full no-underline group cursor-pointer relative shadow-lg rounded-lg p-px text-xs  leading-6 text-white inline-block">
            <span className="absolute inset-0 overflow-hidden rounded-full">
              <span className="absolute inset-0 rounded-full  opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            </span>
            <div className="relative text-black flex space-x-2 items-center z-10 rounded-lg bg-white py-2 px-4 ring-1 ring-white/10 justify-center">
              <PlusCircle className="w-4 h-4 mr-1" />
              <p className="text-sm">New Chat</p>
            </div>
            <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-orange-400/0 via-orange-400/90 to-yellow-400/0 transition-opacity duration-500 group-hover:opacity-40" />
          </button>
        </Link>
      </div>

      <div className="flex-grow overflow-y-auto mt-4">
        <Separator className="bg-orange-200" />
        <p className="text-orange-400 mb-3 mt-3 font-semibold pl-1">
          Previous Chats
        </p>
        <div className="flex flex-col gap-2">
          {chats.map((chat) => (
            <Link key={chat.id} href={`/chat/${chat.id}`}>
              <div
                className={cn(
                  "rounded-lg flex items-center p-2 transition-all",
                  {
                    "bg-orange-500 text-white shadow-lg": chat.id == chatId,
                    "border border-orange-300 hover:border-orange-500 hover:text-orange-500":
                      chat.id != chatId,
                  }
                )}
              >
                <MessageCircleMore className="mr-2 h-4 w-4" />
                <p className="overflow-hidden truncate whitespace-nowrap text-sm">
                  {chat.pdfName}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <div className="flex-shrink-0 mt-4">
        <div className="flex items-center justify-between p-2 rounded-lg bg-gradient-to-r from-orange-100 to-orange-200 shadow-md">
          <Link
            href="/"
            className="flex items-center text-orange-500 hover:text-orange-700 transition-colors"
          >
            <Home className="w-5 h-5 mr-2" />
            <span className="font-medium">Home</span>
          </Link>
          <UserButton
            afterSignOutUrl="/"
            appearance={{
              elements: {
                avatarBox: "w-10 h-10",
              },
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default ChatSideBar;
