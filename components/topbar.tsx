import Link from "next/link";
import { Button } from "./ui/button";

function Topbar() {
  return (
    <nav className="sticky px-10 top-0 z-30 flex w-full items-center justify-between py-3 bg-transparent">
      <div className="h-12 w-[145px] justify-center flex items-center ">
        <Link href="/home" className="flex items-center">
          <p className="font-extrabold text-2xl flex">
            Intellect <span className="text-orange-500">AI</span>
          </p>
        </Link>
      </div>
      <div className="flex items-center gap-1">
        <Link href={"/dashboard"}>
          <Button className="bg-transparent border-[1px] border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-black-100">
            Sign In
          </Button>
        </Link>
      </div>
    </nav>
  );
}

export default Topbar;
