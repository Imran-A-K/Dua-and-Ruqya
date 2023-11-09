"use client";

import { useState } from "react";
import Category from "./Category";

function Categories({ categories, isLoading }) {
  const [categoriesData, setCategoriesData] = useState([...categories]);
  const [searchDua, setSearchDua] = useState("");

  const handleSearchInputChange = (event) => {
    setSearchDua(event.target.value);

    if (event.target.value === "") {
      setCategoriesData([...categories]);
    } else {
      const filteredResults = categories.filter((item) =>
        item.cat_name_en
          .toLowerCase()
          .includes(event.target.value.toLowerCase())
      );
      setCategoriesData(filteredResults);
    }
  };
  return (
    <div className="fixed h-[85.5vh] z-0 lg:top-[100px] lg:left-[200px] lg:w-[350px] overflow-hidden bg-white rounded-lg hidden xl:block">
      <div className="bg-green-600 text-center py-5 font-semibold text-white px-0">
        Categories
      </div>
      <div className="">
        <div className="pt-4 mx-3 z-0">
          <div className="max-w-md mx-auto">
            <div className="relative border-2 flex items-center w-full h-12 rounded-lg focus-within:shadow-lg bg-white overflow-hidden">
              <div className="grid place-items-center h-full w-12 text-gray-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>

              <input
                className="peer h-full w-full outline-none text-sm text-gray-700 pr-2"
                type="text"
                id="search"
                placeholder="Search Categories.."
                value={searchDua}
                onChange={(event) => handleSearchInputChange(event)}
              />
            </div>
          </div>
        </div>
        <div
          id="categories"
          className="h-[68vh] overflow-y-auto overflow-hidden mt-3"
        >
          <div className="mx-3 -mt-4">
            {categoriesData.map((category) => (
              <Category key={category.id} category={category} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Categories;
