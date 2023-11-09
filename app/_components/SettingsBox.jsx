import Image from "next/image";
function SettingsBox() {
  return (
    <div className="hidden xl:block xl:col-start-4 2xl:-z-[17] z-[-2] mt-4">
      <div
        id="settings-box"
        className="overflow-hidden w-full 2xl:w-[270px] 3xl:w-[300px]"
      >
        <div className="bg-white w-full h-[85.5vh] rounded-3xl pt-9 overflow-auto pb-16  sm:h-fit sm:rounded-3xl md:h-screen md:rounded-3xl 2xl:w-full">
          <div className=" pt-9 pb-6 sm:pt-0">
            <p className="text-center text-xl">Settings</p>
          </div>
          <div className="sm:pb-4 w-full">
            <div className="mx-4 my-4">
              <div className="border-x-1 border-b-1 rounded-lg">
                <div className="cursor-pointer">
                  <div className="transition bg-gray-400 bg-opacity-10 duration-300 delay-[10ms] flex w-full rounded-lg">
                    <div className="w-1 rounded-tl-lg rounded-bl-lg"></div>
                    <div className="p-2 flex items-center w-full">
                      <div className="bg-gray-400 bg-opacity-30 flex p-2 items-center rounded-full mr-5 justify-center dark:bg-dark-bg ">
                        <Image
                          src="/icons/settings/language.svg"
                          alt="language"
                          height={40}
                          width={40}
                          className="rounded-full"
                        />
                      </div>
                      <p className="text-green-500 font-medium  text-start text-base leading-5 lg:text-sm">
                        Language Settings
                      </p>
                    </div>
                  </div>
                </div>
                <div className="">
                  <div className="py-6 rounded-b-lg">
                    <div className="flex gap-x-3 mx-4 justify-center">
                      <button className="bg-primary text-white rounded-md   w-29 h-10 text-ms xs:w-full sm:w-full">
                        English
                      </button>
                      <button className="text-black border border-solid border-[#cccdcf] rounded-md w-29 h-10 text-ms sm:w-full">
                        বাংলা
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mx-4 my-4">
              <div className="">
                <div className="cursor-pointer">
                  <div className="bg-dua-bg flex w-full rounded-lg">
                    <div className=" w-1 rounded-tl-lg rounded-bl-lg"></div>
                    <div className="p-2 flex items-center w-full">
                      <div className="bg-gray-400 bg-opacity-30 flex p-2 items-center rounded-full mr-5 justify-center">
                        <Image
                          src="/icons/settings/general.svg"
                          alt="general"
                          height={24}
                          width={24}
                        />
                      </div>
                      <p className="text-mute-grey-200 text-start text-base leading-5 sm:text-sm lg:text-sm">
                        General Settings
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mx-4 my-4">
              <div className="">
                <div className="cursor-pointer">
                  <div className="bg-dua-bg flex flex-row w-full rounded-lg dark:bg-dark-bg-dark">
                    <div className=" w-1 rounded-tl-lg rounded-bl-lg"></div>
                    <div className="p-2 flex flex-row items-center w-full">
                      <div className="bg-gray-400 bg-opacity-30 flex p-2 items-center rounded-full mr-5 justify-center dark:bg-dark-bg ">
                        <Image
                          src="/icons/settings/font.svg"
                          alt="font"
                          height={24}
                          width={24}
                        />
                      </div>
                      <p className="text-mute-grey-200 text-start text-base leading-5 lg:text-sm">
                        Font Settings
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mx-4 my-4">
              <div className="">
                <div className="cursor-pointer">
                  <div className="flex w-full rounded-lg">
                    <div className=" w-1 rounded-tl-lg rounded-bl-lg"></div>
                    <div className="p-2 flex items-center w-full">
                      <div className="bg-gray-400 bg-opacity-30 flex p-2 items-center rounded-full mr-5 justify-center">
                        <Image
                          src="/icons/settings/font.svg"
                          alt="font"
                          height={24}
                          width={24}
                        />
                      </div>
                      <p className="text-mute-grey-200 text-start text-base leading-5 lg:text-sm">
                        Appearance Settings
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SettingsBox;
