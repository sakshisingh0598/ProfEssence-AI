import {
  BookMarked,
  BookPlus,
  FilePenLine,
  Home,
  LogOut,
  Settings,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Separator } from "./ui/separator";

const Navbar: React.FC = () => {
  return (
    <nav className=" bg-white h-screen p-4 flex flex-col justify-between">
      <div>
        {/* <Image
            src="logo.png"
            alt=""
            width={120}
            height={40}
            className="mb-8"
          /> */}
        <div className="bg-gray-50 rounded-xl p-4 border border-dashed shadow-md mb-6">
          Logo here
        </div>

        <div className="mb-8">
          <ul>
            <div className="flex flex-col gap-4 mb-4 text-sm">
              <Link
                href={`/`}
                className="text-orange-400 p-3 rounded-md shadow-md hover:text-orange-400 flex items-center bg-gray-50"
              >
                <span className="mr-2">
                  <Home size={18} />
                </span>
                Overview
              </Link>
              <Link
                href={`/`}
                className="text-gray-700 hover:text-purple-600 flex items-center"
              >
                <span className="mr-2">
                  <BookMarked size={18} />
                </span>
                Enrolled Courses
              </Link>
            </div>
          </ul>
          <h2 className="text-gray-400 text-xs font-semibold mb-4">SPACES</h2>
          <Separator className=" mb-4" />
          <ul>
            <div className="flex flex-col gap-4 pl-3 text-sm">
              <Link
                href={`/`}
                className="text-gray-700 hover:text-purple-600 flex items-center"
              >
                <span className="mr-2">
                  <BookPlus size={18} />
                </span>
                Create Course
              </Link>
              <Link
                href={`/`}
                className="text-gray-700 hover:text-purple-600 flex items-center"
              >
                <span className="mr-2">
                  <FilePenLine size={18} />
                </span>
                Published Courses
              </Link>
            </div>
          </ul>
        </div>
      </div>

      <div className="pl-3 text-sm">
        <Link
          href="/settings"
          className="text-gray-700 hover:text-purple-600 flex items-center mb-2"
        >
          <span className="mr-2">
            <Settings size={18} />
          </span>
          Settings
        </Link>
        <Link
          href="/logout"
          className="text-red-500 hover:text-red-600 flex items-center mb-2"
        >
          <span className="mr-2">
            <LogOut size={18} />
          </span>
          Logout
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
