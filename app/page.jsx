"use client";
import LeftBar from "./_components/LeftBar";
import TopBar from "./_components/TopBar";
import SettingsBox from "./_components/SettingsBox";
import DataSection from "./_components/DataSection";
import { useEffect } from "react";
import { redirect, useRouter, useSearchParams } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const categoryID = searchParams.get("cat_id");
  useEffect(() => {
    if (!categoryID) {
      router.replace("/?cat_id=1");
    }
  }, [categoryID, router]);
  return (
    <main className="relative p-6 sm:grid gap-0 sm:gap-4 max-sm:overflow-auto flex flex-col xl:grid-rows-[46px,1fr] z-0 xl:grid-cols-[105px,350px,1fr,270px] 2xl:grid-cols-[105px,350px,1fr,270px] 3xl:grid-cols-[105px,350px,1fr,350px]">
      <LeftBar />
      <TopBar />
      <DataSection />
      <SettingsBox />
    </main>
  );
}
