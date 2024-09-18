import Hero from "@/components/Hero";
import Topbar from "@/components/topbar";
import { Timeline } from "@/components/ui/timeline";
import Image from "next/image";

export default function Home() {
  const data = [
    {
      title: "AI-Chat (RAG)",
      content: (
        <div>
          <Image
            src="/chat.png"
            alt="startup template"
            width={500}
            height={500}
            className="rounded-lg object-cover h-20 md:h-44 lg:h-[345px] w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
          />
        </div>
      ),
    },
    {
      title: "AI-Flowcharts",
      content: (
        <div>
          <Image
            src="/flow.png"
            alt="startup template"
            width={800}
            height={800}
            className="rounded-lg object-cover h-20 md:h-44 lg:h-[340px] w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
          />
        </div>
      ),
    },
    {
      title: "AI Quiz",
      content: (
        <div>
          <Image
            src="/quiz.png"
            alt="hero template"
            width={500}
            height={500}
            className="rounded-lg object-cover h-20 md:h-44 lg:h-80 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
          />
        </div>
      ),
    },
  ];
  return (
    <div className="bg-[#000319] flex justify-center items-center flex-col mx-auto">
      <Topbar />
      <div className="w-screen">
        <Hero />
        {/* <Features /> */}
      </div>
      <div className="w-full pt-20">
        <Timeline data={data} />
      </div>
    </div>
  );
}
