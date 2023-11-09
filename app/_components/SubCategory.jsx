"use client";
import { useRouter, useSearchParams } from "next/navigation";

function DuaName({ dua, catId, subCatId }) {
  const router = useRouter();
  return (
    <div
      onClick={(event) => {
        event.stopPropagation();
        router.replace(
          `/?cat_id=${catId}&subCat_id=${subCatId}&dua_id=${dua.dua_id}`
        );
      }}
      className="flex"
    >
      <img
        src="/icons/duaarrow.svg"
        className="-translate-y-1 mr-2"
        alt="dua-arrow"
      />
      <p className="text-primary text-xs my-3 text-left w-[95%]">
        {dua.dua_name}
      </p>
    </div>
  );
}

function Subcategory({ subCategory }) {
  const router = useRouter();
  const duaNames = subCategory.duaNames;
  // console.log("ss", subCategory);
  const searchParams = useSearchParams();
  const subCategorySearchParams = !!searchParams.get("subCat_id")
    ? parseInt(searchParams.get("subCat_id"))
    : false;
  const displayDuaNames =
    !!parseInt(searchParams.get("cat_id")) &&
    subCategorySearchParams === subCategory.subcat_id
      ? "block"
      : "hidden";
  return (
    <div className="flex flex-row my-2 relative">
      <div className="bg-green-700 absolute -left-8 translate-x-4 mt-1.5 w-1.5 rounded-full h-1.5"></div>
      <div className="flex flex-col justify-start items-start">
        <p
          onClick={(event) => {
            event.stopPropagation();
            router.replace(
              `/?cat_id=${subCategory.cat_id}&subCat_id=${subCategory.subcat_id}&dua_id=${subCategory.first_dua_id}`
            );
          }}
          className="text-green-600 cursor-pointer font-semibold text-left text-sm"
        >
          {subCategory.subcat_name_en}
        </p>
        <div className={`mt-2 cursor-pointer ${displayDuaNames}`}>
          {duaNames.length > 0
            ? duaNames.map((dua) => (
                <DuaName
                  key={dua.dua_id}
                  dua={dua}
                  catId={subCategory.cat_id}
                  subCatId={subCategory.cat_id}
                />
              ))
            : null}
        </div>
      </div>
    </div>
  );
}
export default Subcategory;
