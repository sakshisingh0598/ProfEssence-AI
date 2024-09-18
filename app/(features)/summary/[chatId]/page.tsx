import ChatSideBar from "@/components/ChatSideBar";
import Summary from "@/components/Summary";
import { db } from "@/lib/db";
import { chats } from "@/lib/db/schema";
import { getSummary } from "@/lib/getSummary";
import { auth } from "@clerk/nextjs/server";
import { eq } from "drizzle-orm";
import Link from "next/link";
import { redirect } from "next/navigation";
import React from "react";

type Props = {
  params: {
    chatId: number;
  };
};

const Page = async ({ params: { chatId } }: Props) => {
  const { userId } = auth();
  if (!userId) {
    return redirect("/sign-in");
  }
  const _chats = await db.select().from(chats).where(eq(chats.userId, userId));
  if (!_chats) {
    return redirect("/dashboard");
  }
  if (!_chats.find((chat) => chat.id == chatId)) {
    return redirect("/dashboard");
  }
  const text = await getSummary(chatId);
  if (!text)
    return (
      <div className="flex h-screen justify-center items-center">
        Some Error occurred while generating. Please Refresh (cmd/cntrl + R)
      </div>
    );
  return (
    <div className="flex h-screen overflow-hidden">
      <div className="w-1/6 h-screen overflow-y-auto">
        <ChatSideBar chats={_chats} chatId={chatId} />
      </div>
      <div className="flex-1 flex flex-col h-screen overflow-hidden">
        <div className="flex-1 overflow-y-auto bg-orange-100 p-6">
          <div className="max-w-3xl mx-auto">
            <Summary text={text} />
          </div>
          {/* </div> */}
          {/* <div className="p-4 bg-orange-100 flex justify-center"> */}
          <div className="w-full flex justify-center">
            <Link href={`/flowchart/${chatId}`}>
              <button className="p-[3px] relative">
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-lg" />
                <div className="px-8 py-2 bg-black rounded-[6px] relative group transition duration-200 text-white hover:bg-transparent">
                  Get AI-Generated Flow-Chart for your PDF
                </div>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
