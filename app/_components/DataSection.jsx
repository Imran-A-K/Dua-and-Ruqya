"use client";
import Categories from "./Categories";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import Duas from "./Duas";
import { useSearchParams } from "next/navigation";
import Skeleton from "./Skeleton";
function DataSection() {
  const searchParams = useSearchParams();
  const categoryId = searchParams.get("cat_id");

  const {
    refetch,
    isLoading,
    data: categories = [],
  } = useQuery({
    queryKey: [`all-categories`],
    queryFn: async () => {
      const response = await axios.get(
        // `http://localhost:4000/api/categories`
        `https://ird-server-task.vercel.app/api/categories`
      );

      return response.data;
    },
  });

  const { isLoading: isDuaDataLoading, data: duas = [] } = useQuery({
    queryKey: [`duas-category,cat-id,${categoryId}`],
    queryFn: async () => {
      const response = await axios.get(
        // `http://localhost:4000/api/duas?cat_id=${categoryId}`
        `https://ird-server-task.vercel.app/api/duas?cat_id=${categoryId}`
      );

      return response.data;
    },
  });

  return (
    <div className="md:z-[-3] max-md:flex max-md:w-full lg:grid-cols-[350px,1fr] lg:gap-2 lg:z-[-2] xl:col-span-2 xl:gap-x-6 2xl:gap-x-6 2xl:z-[-1] 2xl:w-full 3xl:gap-x-6 3xl:z-[-16]  grid sm:mx-auto lg:w-full">
      {isLoading ? (
        <Skeleton className="h-full bg-white z-50" />
      ) : (
        <Categories categories={categories} />
      )}
      {!isDuaDataLoading ? (
        <Duas
          duas={duas}
          categories={categories}
          categoryId={categoryId}
          isDuaDataLoading={isDuaDataLoading}
        />
      ) : (
        <div className="lg:col-start-2 lg:col-span-2 w-full mt-1">
          <Skeleton className="h-full bg-white z-50" />
        </div>
      )}
    </div>
  );
}

export default DataSection;
