import clsx from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs) {
  return twMerge(clsx(inputs));
}

function Skeleton({ className = "" }) {
  return <div className={cn("w-full h-4 rounded animate-pulse", className)} />;
}

export default Skeleton;
