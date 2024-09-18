"use client";

import { getChatId } from "@/lib/getChatId";
import { Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

type Props = {};

const GoToChats = (props: Props) => {
  const [loading, setloading] = useState(false);
  const router = useRouter();

  const handleClick = async () => {
    try {
      setloading(true);
      let chatId = await getChatId();
      router.push(`/chat/${chatId}`);
      setloading(false);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <button className="p-[3px] relative shadow-2xl" onClick={handleClick}>
        <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-yellow-400 rounded-lg" />
        <div className="px-8 py-2  bg-white/20 rounded-[6px]  relative group transition duration-200 text-black hover:bg-transparent hover:text-white">
          {!loading ? (
            <p>Go to chats</p>
          ) : (
            <Loader2 className="h-6 w-6 text-red-500 animate-spin" />
          )}
        </div>
      </button>
    </div>
  );
};

export default GoToChats;
