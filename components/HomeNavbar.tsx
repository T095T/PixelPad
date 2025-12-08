import React from "react";
import Link from "next/link";

function Navbar() {
  return (
    <>
      <div className=" z-50 w-[70rem] h-14 flex justify-between border shadow-lg mt-2 py-2 text-neutral-600 top-0 sticky bg-white rounded-md ">
        <div className="flex flex-row">
          <img
            src="/logoPixelPad.png"
            alt="logo"
            className="w-15 h-15 border-radius-10 cursor-pointer hover:border-white transition rounded-md ml-3"
          />
          <h1 className="text-xl font-semibold flex px-3 items-center">
            PixelPad
          </h1>
        </div>
        <div className="flex flex-row gap-2 px-3 items-center mr-3">
          <h1 className="font-medium text-black hover:opacity-60">Features</h1>
          <h1 className="font-medium text-black hover:opacity-60">About</h1>
          <Link href="/editor" >
          <button
            className="px-4 py-2 rounded-md border border-black text-black hover:bg-black hover:text-white transition
"
          >
            Get Started For Free
          </button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Navbar;
