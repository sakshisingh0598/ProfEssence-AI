import ChatSideBar from "@/components/ChatSideBar";
import MermaidChart from "@/components/MermaidChart";
import { db } from "@/lib/db";
import { chats } from "@/lib/db/schema";
import { auth } from "@clerk/nextjs/server";
import { eq } from "drizzle-orm";
import { redirect } from "next/navigation";

type Props = {
  params: {
    chatId: number;
  };
};

const page = async ({ params: { chatId } }: Props) => {
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
  return (
    <div className="flex h-screen overflow-hidden">
      <div className="w-1/6 h-screen overflow-y-auto">
        <ChatSideBar chats={_chats} chatId={chatId} />
      </div>
      <div className="flex-1 flex flex-col h-screen overflow-hidden">
        <div className="flex-1 overflow-y-auto bg-orange-100 p-6">
          <div className="max-w-3xl mx-auto">
            <MermaidChart chatId={chatId} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
