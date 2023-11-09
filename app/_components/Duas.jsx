"use client";
import { useSearchParams } from "next/navigation";
import { useEffect, useRef } from "react";

function DuaTitleSection({ category }) {
  return (
    <div
      id="sec_1"
      className="flex mt-4 bg-white rounded-xl px-5 py-4 justify-start items-center"
    >
      <p className="text-title font-medium leading-[25px] text-[0.9375rem]">
        <span className="font-semibold leading-[25px] text-[0.9375rem] text-green-600">
          Section:{" "}
        </span>
        {category?.cat_name_en}
      </p>
    </div>
  );
}

function DuaCard({ dua, serial }) {
  return (
    <div id={`${dua.dua_id}`} className=" bg-white rounded-xl mb-5">
      <div className="p-6">
        <div>
          <div className="flex justify-start items-center">
            <img
              src="/icons/duaCard/duacard.svg"
              alt="duacard"
              className="mr-3"
            />
            <p className="text-green-600 font-medium">
              {serial}. {dua.dua_name_en}
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-start items-start">
          <div className="w-full space-y-3">
            <p className="mt-5 text-justify leading-8 font-normal text-lg">
              <span>{dua.top_en}</span>
            </p>
            <p>{dua.dua_arabic}</p>
            {!!dua.transliteration_en ? (
              <p className="italic">
                <span className="font-semibold">Transliteration: </span>
                {dua.transliteration_en}
              </p>
            ) : null}
            {!!dua.translation_en ? (
              <p className="">
                <span className="font-semibold">Translation: </span>
                {dua.translation_en}
              </p>
            ) : null}
          </div>
          <div>
            <p className="mt-5 font-normal text-green-600 text-lg">
              Reference:
            </p>
            <div className="mt-1 font-normal text-xl">
              <span>{dua.refference_en}</span>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="w-full flex items-center justify-end">
          <div className="flex items-center justify-between px-6">
            <div className="flex items-center justify-between py-6 gap-x-8 sm:gap-x-6">
              <div id="copy" className="relative w-6">
                <img
                  className="cursor-pointer"
                  src="/icons/others/copy.svg"
                  alt="copy"
                />
              </div>
              <div id="bookmark" className="relative w-6">
                <img
                  className="cursor-pointer"
                  src="/icons/others/bookmark.svg"
                  alt="bookmark"
                />
              </div>
              <div id="plan" className="relative w-6">
                <img
                  className="cursor-pointer"
                  src="/icons/others/plan.svg"
                  alt="plan"
                />
              </div>
              <div id="share" className="relative w-6">
                <img
                  className="cursor-pointer"
                  src="/icons/others/share.svg"
                  alt="share"
                />
              </div>
              <div id="report" className="relative w-6">
                <img
                  className="cursor-pointer"
                  src="/icons/others/report.svg"
                  alt="report"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Duas({ duas, categories, categoryId, isDuaLoading }) {
  // console.log(duas);
  const searchParams = useSearchParams();
  const duaSearchParams = !!searchParams.get("dua_id")
    ? searchParams.get("dua_id")
    : false;
  console.log(duaSearchParams);
  const category = categories.find((category) => category.cat_id == categoryId);
  const duaContainerRef = useRef(null);
  useEffect(() => {
    if (duaSearchParams && duaContainerRef.current) {
      const childDiv = Array.from(duaContainerRef.current.children).find(
        (child) => child.id === duaSearchParams
      );
      childDiv.scrollIntoView({ behavior: "smooth" });
      console.log(childDiv);
    }
  }, [duaSearchParams]);
  return (
    <>
      <div className="lg:col-start-2 lg:col-span-2 w-full">
        <DuaTitleSection category={category} />
      </div>

      <div
        id="duas"
        ref={duaContainerRef}
        className="w-full max-sm:overflow-y-auto overflow-y-scroll max-sm:pb-20
    md:h-[calc(100vh-100px)] md:pb-48 max-md:w-[98%] max-md:mx-auto
    lg:pb-6  lg:col-start-2 lg:col-span-2
    xl:pb-8 xl:w-full
    max-sm:px-2 delay-1000 transition duration-1000 ease-linear
     [&::-webkit-scrollbar]:hidden z-50"
      >
        {duas.map((dua, index) => (
          <DuaCard key={dua["_id"]} dua={dua} serial={index + 1} />
        ))}
      </div>
    </>
  );
}

export default Duas;

{
  /* <div
id="duas"
className="w-full max-sm:overflow-y-auto overflow-y-scroll max-sm:pb-20
md:h-[calc(100vh-100px)] md:pb-48 max-md:w-[98%] max-md:mx-auto
lg:pb-6  lg:col-start-2 lg:col-span-2
xl:pb-8 xl:w-full
md:mt-4 max-sm:px-2 delay-1000 transition duration-1000 ease-linear
[&::-webkit-scrollbar]:hidden z-50"
>
<DuaTitleSection category={category} />
{duas.map((dua, index) => (
  <DuaCard key={dua["_id"]} dua={dua} serial={index + 1} />
))}
</div> */
}
