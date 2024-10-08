"use client";

import { UploadDropzone } from "@/utils/uploadthing";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { Loader2 } from "lucide-react";
import ProgressBar from "@ramonak/react-progress-bar";
import { useRouter } from "next/navigation";
// import "@uploadthing/react/styles.css";

const PdfUpload = () => {
  const router = useRouter();
  const [uploading, Setuploading] = useState(false);
  const [uploadprogress, Setuploadprogress] = useState(0);
  return (
    <div className="flex flex-col items-center justify-center">
      {uploading ? (
        <div className="flex flex-col items-center bg-white/20 justify-center border-[2px] border-dotted border-orange-500 rounded-lg p-2">
          <Loader2 className="h-10 w-10 text-orange-500 mb-2 animate-spin" />
          <p className="text-orange-500 mb-2">
            Uploading and Processing your PDF
          </p>
          <ProgressBar
            completed={uploadprogress}
            width="160px"
            bgColor="orange"
          />
        </div>
      ) : (
        <UploadDropzone
          endpoint="pdfUploader"
          className="p-2 cursor-pointer text-red-500 bg-black-200  shadow-2xl"
          onUploadBegin={() => Setuploading(true)}
          onClientUploadComplete={(res) => {
            let chat_id = res[0].serverData.chat_id;
            toast.success("uploaded successfully");
            console.log("new chat created");
            router.push(`/chat/${chat_id}`);
            Setuploading(false);
          }}
          onUploadError={(error: Error) => {
            toast.error(error.message);
          }}
          onUploadProgress={(p: number) => Setuploadprogress(p)}
          appearance={{
            button:
              "p-2 bg-transparent bg-yellow-300/50 text-sm text-orange-500",
            container: "bg-orange-300/30",
            label: "text-orange-600",
            uploadIcon: "text-red-400",
          }}
        />
      )}
    </div>
  );
};

export default PdfUpload;
