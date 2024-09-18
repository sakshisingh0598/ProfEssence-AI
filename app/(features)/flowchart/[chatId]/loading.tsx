import { Loader2 } from "lucide-react";
import React from "react";

const loading = () => {
  return (
    <div className="flex h-screen justify-center items-center gap-2">
      <Loader2 className="w-7 h-7 animate-spin text-orange-400" />
      <p className="text-black">Please wait while we curate your Flow-chart!</p>
    </div>
  );
};

export default loading;
