"use client";
import { useRef, useState, Fragment } from "react";
import Drawer from "./Drawer";
import Image from "next/image";

function TopBar() {
  const [isOpen, setIsOpen] = useState(false);
  const openDrawer = () => setIsOpen(true);
  const closeDrawer = () => setIsOpen(false);

  return (
    <div className="col-span-full col-start-2">
      <div className="grid grid-cols-[5fr,1fr] w-full">
        <div className="flex justify-between items-center">
          <p className="text-2xl font-medium pl-4">Duas Page</p>
          <div className="flex">
            <div className="relative flex flex-row items-center">
              <form className="max-sm:w-full" action="">
                <div className="relative w-82 max-sm:w-full md:mr-6 md:w-72 lg:mr-6">
                  <div className="flex justify-between max-sm:flex-col max-sm:gap-4">
                    <input
                      id="search_box"
                      className="placeholder:text-mute-grey placeholder:text-sm bg-white 0 md:bg-gray-100 lg:bg-gray-100 w-full rounded-md py-4 px-4 shadow-sm focus:outline-none focus:border-primary focus:ring-primary focus:ring-1 sm:text-sm "
                      placeholder="Search by Dua Name"
                      type="text"
                      name="search"
                    />
                    <button
                      type="submit"
                      className="flex items-center justify-center bg-gray-200 cursor-pointer hover:bg-gray-300 hover:text-gray-500 text-gray-400 px-4 py-[10px] rounded-sm absolute right-1 top-[4px] focus:bg-green-700"
                    >
                      <span className="flex items-center sm-max:hidden">
                        <Image
                          src="/icons/search.svg"
                          alt="search"
                          height={24}
                          width={24}
                        />
                      </span>
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-end w-full gap-2">
          <div className="flex cursor-pointer items-center gap-1">
            <Image
              src="/icons/settings/profile.svg"
              alt="profile"
              height={45}
              width={45}
            />
            <Image
              src="/icons/settings/PopDown.svg"
              alt="popDown"
              height={7}
              width={10}
            />
          </div>
          <div className="flex cursor-pointer items-center">
            <Image
              src="/icons/settings/settings.svg"
              alt="profile"
              height={24}
              width={24}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopBar;

{
  /* <div className="App">
        <button onClick={openDrawer}>Open Drawer</button>
        <Drawer isOpen={isOpen} onClose={closeDrawer}>
          <h2 className="text-2xl">Drawer Content</h2>
          <p>This is the content inside the drawer.</p>
          <button onClick={closeDrawer}>Close Drawer</button>
        </Drawer>
      </div> */
}
