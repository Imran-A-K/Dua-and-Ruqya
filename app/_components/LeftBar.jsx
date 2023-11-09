import Image from "next/image";
import React from "react";

function LeftBar() {
  return (
    <div className="row-span-full z-50 hidden xl:block xl:z-[-1] 2xl:block 2xl:z-[-1] 3xl:block 3xl:z-[-16]">
      <div
        id="leftBar"
        className="w-[100px] z-50 flex flex-col gap-y-5 fixed overflow-hidden"
      >
        <div className="bg-white rounded-3xl px-4  lg:h-[calc(93vh)] xl:h-[94vh] 2xl:h-[93vh] 3xl:h-[93vh] scrl-left pb-16">
          <div className="container mb-10 pt-7 xl:mb-16 2xl:mb-16 3xl:mb-24">
            <Image
              src="/icons/nav/dua-logo.svg"
              alt="dua-logo"
              className="w-16 mx-auto cursor-pointer h-13 drop-shadow-primary xl:mb-0"
              width={80}
              height={80}
            />
          </div>
          <div className="flex items-center justify-center w-full my-2 rounded-lg cursor-pointer group">
            <div className="w-1 rounded-tl-lg rounded-bl-lg "></div>
            <div className="flex items-center justify-center p-2">
              <div className="flex items-center justify-center w-10 h-10 p-2 bg-opacity-100 rounded-full hover:scale-105 bg-slate-200">
                <Image
                  src="/icons/nav/home.svg"
                  alt="/"
                  width={20}
                  height={20}
                />
              </div>
              <h2 className="text-sm font-medium text-opacity-100 text-start group-hover:text-primary "></h2>
            </div>
          </div>
          <div className="flex items-center justify-center w-full my-2 rounded-lg cursor-pointer group">
            <div className="w-1 rounded-tl-lg rounded-bl-lg "></div>
            <div className="flex items-center justify-center p-2">
              <div className="flex items-center justify-center w-10 h-10 p-2 bg-opacity-100 rounded-full hover:scale-105 bg-slate-200">
                <Image
                  src="/icons/nav/alldua.svg"
                  alt="/alldua"
                  width={38}
                  height={38}
                />
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center w-full my-2 rounded-lg cursor-pointer group">
            <div className="w-1 rounded-tl-lg rounded-bl-lg "></div>
            <div className="flex items-center justify-center p-2">
              <div className="flex items-center justify-center w-10 h-10 p-2 bg-opacity-100 rounded-full hover:scale-105 bg-slate-200">
                <Image
                  src="/icons/nav/memorize.svg"
                  alt="/memorize"
                  width={38}
                  height={38}
                />
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center w-full my-2 rounded-lg cursor-pointer group">
            <div className="w-1 rounded-tl-lg rounded-bl-lg "></div>
            <div className="flex items-center justify-center p-2">
              <div className="flex items-center justify-center w-10 h-10 p-2 bg-opacity-100 rounded-full hover:scale-105 bg-slate-200">
                <Image
                  src="/icons/nav/bookmark.svg"
                  alt="/bookmark"
                  width={38}
                  height={38}
                />
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center w-full my-2 rounded-lg cursor-pointer group">
            <div className="w-1 rounded-tl-lg rounded-bl-lg "></div>
            <div className="flex items-center justify-center p-2">
              <div className="flex items-center justify-center w-10 h-10 p-2 bg-opacity-100 rounded-full hover:scale-105 bg-slate-200">
                <Image
                  src="/icons/nav/ruqyah.svg"
                  alt="/ruqyah"
                  width={38}
                  height={38}
                />
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center w-full my-2 rounded-lg cursor-pointer group">
            <div className="w-1 rounded-tl-lg rounded-bl-lg "></div>
            <div className="flex items-center justify-center p-2">
              <div className="flex items-center justify-center w-10 h-10 p-2 bg-opacity-100 rounded-full hover:scale-105 bg-slate-200">
                <Image
                  src="/icons/nav/dua-info.svg"
                  alt="/dua-info"
                  width={38}
                  height={38}
                />
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center w-full my-2 rounded-lg cursor-pointer group">
            <div className="w-1 rounded-tl-lg rounded-bl-lg "></div>
            <div className="flex items-center justify-center p-2">
              <div className="flex items-center justify-center w-10 h-10 p-2 bg-opacity-100 rounded-full hover:scale-105 bg-slate-200">
                <Image
                  src="/icons/nav/books.svg"
                  alt="/books"
                  width={38}
                  height={38}
                />
              </div>
            </div>
          </div>
          <div>
            <div className="py-16 text-center xl:py-16 2xl:py-16 3xl:py-24">
              <button className="p-4 -mt-5 text-sm text-white rounded-lg bg-primary drop-shadow-primary">
                <div className="flex items-center justify-center">
                  <Image
                    src="/icons/nav/support.svg"
                    alt="support"
                    height={24}
                    width={24}
                  />
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftBar;
