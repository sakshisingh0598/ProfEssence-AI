import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import MarkdownRenderer from "./MarkdownRenderer";

type Props = {
  text: string;
};

const Summary = ({ text }: Props) => {
  return (
    <div className="m-2 p-2 max-w-5xl">
      <Card className="border-[1px] border-orange-500 p-4 shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl">AI Summary</CardTitle>
          <CardDescription>
            Summary of your PDF generated with AI (for now max 5 pages can be
            summarized)
          </CardDescription>
        </CardHeader>
        <CardContent className="text-sm">
          <MarkdownRenderer content={text} />
        </CardContent>
      </Card>
    </div>
  );
};

export default Summary;
