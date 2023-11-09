"use client";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useRef } from "react";
import Subcategory from "./SubCategory";

function Category({ category }) {
  //   console.log("individual category", category);
  const router = useRouter();
  const categoryRef = useRef(null);
  const searchParams = useSearchParams();
  const subCategories = category.subCategories;
  const displaySubCategories =
    parseInt(searchParams.get("cat_id")) === category.cat_id
      ? "block"
      : "hidden";
  const scrollToCategory =
    parseInt(searchParams.get("cat_id")) === category.cat_id;
  useEffect(() => {
    if (scrollToCategory && categoryRef.current) {
      categoryRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [scrollToCategory]);
  return (
    <div
      ref={categoryRef}
      onClick={() => {
        router.replace(`/?cat_id=${category.cat_id}`);
      }}
      className="cursor-pointer group"
    >
      <div className="flex gap-4 items-center p-4 bg-slate-400 bg-opacity-30 rounded-lg my-4">
        <Image
          src={`/icons/category/${category.cat_icon}.svg`}
          alt="duar_gurotto"
          height={56}
          width={56}
        />
        <div className="flex-1">
          <div className="flex flex-col items-stretch">
            <p className="font-semibold pb-1">{category.cat_name_en}</p>
            <p className="text-xs text-gray-500 font-medium">
              Subcategory <span>{category.no_of_subcat}</span>
            </p>
          </div>
        </div>
      </div>
      <div className="ml-12 border-l-2 border-dotted my-2 border-green-600">
        <div
          className={`flex border-dotted flex-col justify-start items-start gap-y-2 ml-3 ${displaySubCategories}`}
        >
          {subCategories.length > 0
            ? subCategories.map((subCategory) => (
                <Subcategory
                  key={subCategory["_id"]}
                  subCategory={subCategory}
                />
              ))
            : null}
        </div>
      </div>
    </div>
  );
}

export default Category;
