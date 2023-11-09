import React from "react";

function Cus() {
  return (
    <div className="xl:col-start-2 xl:col-span-full 2xl:col-start-2 2xl:col-span-full 2xl:z-[-1] 3xl:col-start-2 3xl:col-span-full 3xl:z-[-16]">
      <div className="right-10 lg:left-[1rem] xl:left-1  hidden xl:relative mb-20 lg: xl:block 2xl:block 3xl:block">
        <div className="grid grid-cols-[82.2%,1fr] xl:w-[99%] 2xl:grid-cols-[82.2%,1fr] 3xl:grid-cols-[81%,1fr]">
          <div className="flex flex-row justify-between">
            <div className="flex items-center text-left">
              <div>
                <h1 className="text-2xl dark:text-dark-text">Duas Page</h1>
                <p className="text-sm text-mute-grey-200 dark:text-dark-text"></p>
              </div>
            </div>
            <div className="relative flex flex-row items-center">
              <form className="sm-max:w-full" action="">
                <div className="relative w-82 sm-max:w-full md:mr-6 md:w-72 lg:mr-6">
                  <div className="flex justify-between sm-max:flex-col sm-max:gap-4">
                    <input
                      id="search_box"
                      className="placeholder:text-mute-grey dark:placeholder:text-[#96a2b4] block placeholder: placeholder:text-sm bg-white sm-max:bg-gray-200 md:bg-gray-100 lg:bg-gray-100 w-full rounded-md py-3 px-4 shadow-sm focus:outline-none focus:border-primary focus:ring-primary focus:ring-1 sm:text-sm sm-max:dark:bg-dark-bg-lite md:dark:bg-dark-bg-dark dark:bg-dark-bg dark:placeholder:opacity-[.6] lg:dark:bg-dark-bg-dark "
                      placeholder="Search by Dua Name"
                      type="text"
                      name="search"
                      value=""
                    />
                    <button
                      type="submit"
                      className="flex items-center justify-center bg-gray-100 dark:bg-dark-bg-dark md-min:dark:hover:text-gray-400 dark:text-gray-500 cursor-pointer md-minhover:bg-gray-200 hover:text-gray-500 text-gray-400 px-4 py-[9px] rounded-md md-min:absolute right-1 top-1 sm-max:bg-primary md:bg-white md:dark:bg-dark-bg-lite lg:bg-white lg:dark:bg-dark-bg-lite sm-max:focus:bg-green-700"
                    >
                      <span className="flex items-center sm-max:hidden">
                        <svg
                          className="stroke-mute-grey"
                          width="22"
                          height="22"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M21 21L15 15L21 21ZM17 10C17 10.9193 16.8189 11.8295 16.4672 12.6788C16.1154 13.5281 15.5998 14.2997 14.9497 14.9497C14.2997 15.5998 13.5281 16.1154 12.6788 16.4672C11.8295 16.8189 10.9193 17 10 17C9.08075 17 8.1705 16.8189 7.32122 16.4672C6.47194 16.1154 5.70026 15.5998 5.05025 14.9497C4.40024 14.2997 3.88463 13.5281 3.53284 12.6788C3.18106 11.8295 3 10.9193 3 10C3 8.14348 3.7375 6.36301 5.05025 5.05025C6.36301 3.7375 8.14348 3 10 3C11.8565 3 13.637 3.7375 14.9497 5.05025C16.2625 6.36301 17 8.14348 17 10Z"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          ></path>
                        </svg>
                      </span>
                      <p className="hidden sm-max:block sm-max:text-white">
                        Search
                      </p>
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="flex flex-row items-center justify-end">
            <div className="md:-z-[1] lg:-z-[1]">
              <div className="relative" data-headlessui-state="">
                <button
                  className="inline-flex items-center px-3 text-base font-medium rounded-md text-opacity-90 group hover:text-opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-body-bg focus-visible:ring-opacity-75 sm:px-0"
                  id="headlessui-popover-button-:r0:"
                  type="button"
                  aria-expanded="false"
                  data-headlessui-state=""
                >
                  <img src="/icons/settings/profile.svg" alt="profile" />
                  <svg
                    className="ml-2 mr-2"
                    width="10"
                    height="7"
                    viewBox="0 0 10 7"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.79241 5.97063C5.3921 6.49064 4.6079 6.49064 4.20759 5.97063L1.04322 1.85999C0.537025 1.20243 1.00579 0.25 1.83563 0.25L8.16437 0.250001C8.99421 0.250001 9.46298 1.20243 8.95678 1.86L5.79241 5.97063Z"
                      fill="#868686"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>
            <div>
              <img
                src="/icons/settings.svg"
                className="2xl:hidden 3xl:hidden"
                alt="settings"
              />
              <main className="fixed inset-0 z-20 overflow-hidden transition-all ease-in-out delay-200 transform translate-x-full bg-gray-900 bg-opacity-50 opacity-0 2xl:hidden 3xl:block">
                <section className="right-0 xs:w-[280px] sm:w-[340px] md:w-[340px] lg:w-[340px] xl:w-[340px] rounded-l-3xl z-20 bg-white dark:bg-dark-bg-dark absolute h-full shadow-xl delay-400 duration-500 ease-in-out transition-all transform translate-x-full">
                  <article className="relative flex flex-col w-full h-full overflow-none scrl xl:pb-0">
                    <div
                      id="right-bar"
                      className="overflow-hidden w-full 2xl:w-[270px] 3xl:w-[300px]"
                    >
                      <div className="bg-white dark:bg-dark-bg w-full h-[85.5vh] rounded-3xl scrl-left pb-16 xs:rounded-3xl xs:h-[72vh] xs:pb-2 sm:h-fit sm:rounded-3xl md:h-screen md:rounded-l-3xl md:rounded-r-none lg:h-screen lg:rounded-l-3xl lg:rounded-r-none xl:h-screen xl:rounded-l-3xl xl:rounded-r-none 2xl:w-full 3xl:w-full">
                        <div className="pb-6 pt-9 xs:pt-0 sm:pt-0">
                          <p className="text-xl text-center dark:text-dark-text xs:hidden sm:hidden">
                            Settings
                          </p>
                        </div>
                        <div className="w-full xs:pb-4 sm:pb-4">
                          <div className="mx-4 my-4">
                            <div className="rounded-lg border-x-devider border-x-1 border-b-1 dark:border-none dark:bg-dark-bg-dark">
                              <div className="cursor-pointer">
                                <div className="dark:bg-dark-bg-lite transition duration-300 delay-[10ms] bg-dua-bg flex flex-row w-full rounded-lg">
                                  <div className="w-1 rounded-tl-lg rounded-bl-lg bg-primary"></div>
                                  <div className="flex flex-row items-center w-full p-2">
                                    <div className="flex items-center justify-center p-2 mr-5 rounded-full bg-icon-bg dark:bg-dark-bg ">
                                      <img
                                        src="/icons/settings/language.svg "
                                        alt="language"
                                      />
                                    </div>
                                    <p className="text-base font-medium leading-5 text-primary text-start xs:text-sm lg-min:text-sm style-Kalpurush">
                                      Language Settings
                                    </p>
                                  </div>
                                </div>
                              </div>
                              <div className="">
                                <div className="py-6 rounded-b-lg">
                                  <div className="flex flex-row justify-center mx-4 gap-x-3">
                                    <button className="h-10 text-white rounded-md bg-primary w-29 text-ms xs:w-full sm:w-full">
                                      English
                                    </button>
                                    <button className=" dark:bg-dark-bg-lite text-black dark:text-[#e4e4e4] border border-solid border-[#cccdcf] dark:border-none rounded-md w-29 h-10 text-ms xs:w-full sm:w-full">
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
                                <div className="flex flex-row w-full rounded-lg bg-dua-bg dark:bg-dark-bg-dark">
                                  <div className="w-1 rounded-tl-lg rounded-bl-lg "></div>
                                  <div className="flex flex-row items-center w-full p-2">
                                    <div className="flex items-center justify-center p-2 mr-5 rounded-full bg-icon-bg dark:bg-dark-bg ">
                                      <img
                                        src="/icons/settings/general.svg "
                                        alt="general"
                                      />
                                    </div>
                                    <p className="text-base leading-5 text-mute-grey-200 dark:text-dark-text text-start xs:text-sm lg-min:text-sm style-Kalpurush">
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
                                <div className="flex flex-row w-full rounded-lg bg-dua-bg dark:bg-dark-bg-dark">
                                  <div className="w-1 rounded-tl-lg rounded-bl-lg "></div>
                                  <div className="flex flex-row items-center w-full p-2">
                                    <div className="flex items-center justify-center p-2 mr-5 rounded-full bg-icon-bg dark:bg-dark-bg ">
                                      <img
                                        src="/icons/settings/font.svg "
                                        alt="font"
                                      />
                                    </div>
                                    <p className="text-base leading-5 text-mute-grey-200 dark:text-dark-text text-start xs:text-sm lg-min:text-sm style-Kalpurush">
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
                                <div className="flex flex-row w-full rounded-lg bg-dua-bg dark:bg-dark-bg-dark">
                                  <div className="w-1 rounded-tl-lg rounded-bl-lg "></div>
                                  <div className="flex flex-row items-center w-full p-2">
                                    <div className="flex items-center justify-center p-2 mr-5 rounded-full bg-icon-bg dark:bg-dark-bg ">
                                      <img
                                        src="/icons/settings/font.svg "
                                        alt="font"
                                      />
                                    </div>
                                    <p className="text-base leading-5 text-mute-grey-200 dark:text-dark-text text-start xs:text-sm lg-min:text-sm style-Kalpurush">
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
                  </article>
                </section>
                <section className="w-screen h-full cursor-pointer "></section>
              </main>
            </div>
          </div>
        </div>
      </div>
      <div className="fixed top-0 lg:z-[1] w-full md:flex lg:flex flex-row p-5 items-center justify-between bg-white shadow-sm cursor-pointer dark:bg-dark-bg hidden">
        <div className="flex items-center">
          <img src="/icons/nav/dua-logo.svg" alt="dua-logo" />
          <p className="ml-3 text-xl font-medium text-title dark:text-dark-text">
            Dua &amp; Ruqyah
          </p>
        </div>
        <div className="flex items-center justify-between md:z-[1] lg:z-[1]">
          <div className="relative flex flex-row items-center">
            <form className="sm-max:w-full" action="">
              <div className="relative w-82 sm-max:w-full md:mr-6 md:w-72 lg:mr-6">
                <div className="flex justify-between sm-max:flex-col sm-max:gap-4">
                  <input
                    id="search_box"
                    className="placeholder:text-mute-grey dark:placeholder:text-[#96a2b4] block placeholder: placeholder:text-sm bg-white sm-max:bg-gray-200 md:bg-gray-100 lg:bg-gray-100 w-full rounded-md py-3 px-4 shadow-sm focus:outline-none focus:border-primary focus:ring-primary focus:ring-1 sm:text-sm sm-max:dark:bg-dark-bg-lite md:dark:bg-dark-bg-dark dark:bg-dark-bg dark:placeholder:opacity-[.6] lg:dark:bg-dark-bg-dark "
                    placeholder="Search by Dua Name"
                    type="text"
                    name="search"
                    value=""
                  />
                  <button
                    type="submit"
                    className="flex items-center justify-center bg-gray-100 dark:bg-dark-bg-dark md-min:dark:hover:text-gray-400 dark:text-gray-500 cursor-pointer md-minhover:bg-gray-200 hover:text-gray-500 text-gray-400 px-4 py-[9px] rounded-md md-min:absolute right-1 top-1 sm-max:bg-primary md:bg-white md:dark:bg-dark-bg-lite lg:bg-white lg:dark:bg-dark-bg-lite sm-max:focus:bg-green-700"
                  >
                    <span className="flex items-center sm-max:hidden">
                      <svg
                        className="stroke-mute-grey"
                        width="22"
                        height="22"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M21 21L15 15L21 21ZM17 10C17 10.9193 16.8189 11.8295 16.4672 12.6788C16.1154 13.5281 15.5998 14.2997 14.9497 14.9497C14.2997 15.5998 13.5281 16.1154 12.6788 16.4672C11.8295 16.8189 10.9193 17 10 17C9.08075 17 8.1705 16.8189 7.32122 16.4672C6.47194 16.1154 5.70026 15.5998 5.05025 14.9497C4.40024 14.2997 3.88463 13.5281 3.53284 12.6788C3.18106 11.8295 3 10.9193 3 10C3 8.14348 3.7375 6.36301 5.05025 5.05025C6.36301 3.7375 8.14348 3 10 3C11.8565 3 13.637 3.7375 14.9497 5.05025C16.2625 6.36301 17 8.14348 17 10Z"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                      </svg>
                    </span>
                    <p className="hidden sm-max:block sm-max:text-white">
                      Search
                    </p>
                  </button>
                </div>
              </div>
            </form>
          </div>
          <div>
            <div className="mr-4">
              <img src="/icons/settings/settings.svg " alt="settings" />
            </div>
          </div>
          <div className="md:-z-[1] lg:-z-[1]">
            <div className="relative" data-headlessui-state="">
              <button
                className="inline-flex items-center px-3 text-base font-medium rounded-md text-opacity-90 group hover:text-opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-body-bg focus-visible:ring-opacity-75 sm:px-0 "
                id="headlessui-popover-button-:r3:"
                type="button"
                aria-expanded="false"
                data-headlessui-state=""
              >
                <img src="/icons/settings/profile.svg" alt="profile" />
                <svg
                  className="ml-2 mr-2"
                  width="10"
                  height="7"
                  viewBox="0 0 10 7"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5.79241 5.97063C5.3921 6.49064 4.6079 6.49064 4.20759 5.97063L1.04322 1.85999C0.537025 1.20243 1.00579 0.25 1.83563 0.25L8.16437 0.250001C8.99421 0.250001 9.46298 1.20243 8.95678 1.86L5.79241 5.97063Z"
                    fill="#868686"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
}

export default Cus;
