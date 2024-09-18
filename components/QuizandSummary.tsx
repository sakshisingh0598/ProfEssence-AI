import React from "react";
import Link from "next/link";
import { GlareCard } from "./ui/glare-card";

type Props = {
  chatId: number;
};

const QuizandSummary = ({ chatId }: Props) => {
  return (
    <div className="h-full w-full bg-orange-50 flex flex-col justify-center items-center text-sm">
      <div className="flex justify-center items-center">
        <Link
          href={`/quiz/${chatId}`}
          className="border-[1px] hover:bg-orange-100 group shadow-lg animate-shimmer border-dashed border-orange-500 rounded-lg p-1 mr-2 "
        >
          <p className="text-center text-orange-500">AI Quiz</p>

          <p className="text-gray-500 text-sm group-hover:text-black">
            AI generated Quiz (MCQs) on your PDF!
          </p>
        </Link>

        <Link
          href={`/summary/${chatId}`}
          className="border-[1px] hover:bg-orange-100 group shadow-lg border-dashed border-orange-500 rounded-lg p-1"
        >
          <p className="text-center text-orange-500">AI Insight</p>

          <p className="text-gray-500 text-sm group-hover:text-black">
            AI generated Summary and Mindmaps!
          </p>
        </Link>
      </div>
    </div>
  );
};

export default QuizandSummary;
