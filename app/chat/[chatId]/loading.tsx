import { Loader2 } from "lucide-react";
import React from "react";

const loading = () => {
  return (
    <div className="flex h-screen justify-center items-center">
      <Loader2 className="w-7 h-7 animate-spin text-orange-500" />
    </div>
  );
};

export default loading;
