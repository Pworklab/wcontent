"use client";
import { headers } from "next/headers";
import { useRouter, usePathname } from "next/navigation";
import path from "path";
import { title } from "process";

interface HeaderBtnProps {
  title: string;
  link: string;
}

// this is my
function Header_btn({ title, link }: HeaderBtnProps) {
  // at first I was making a button handler but on this case
  // because I'm using router I notice I can just push my link to it!!
  const router = useRouter();
  const currentPath = usePathname();
  const default_page =
    "text-red-400 bg-white rounded-lg p-1 hover:bg-yellow-200";
  const selected_page =
    "text-red-400 bg-green-200 rounded-lg p-1 hover:bg-yellow-200";
  let current_page = "";

  if (link == currentPath) {
    current_page = selected_page;
  } else {
    current_page = default_page;
  }

  return (
    <div>
      <button onClick={() => router.push(link)} className={current_page}>
        {title}
      </button>
    </div>
  );
}

export function Back_btn() {
  const router = useRouter();
  return (
    <div>
      <button onClick={() => router.back()} className="text-white">
        BACK
      </button>
    </div>
  );
}

export default Back_btn;
export { Header_btn };
/*
for debug purpose
function HeaderButtonHandler()
{
alert(currentPath);
alert(link); 
router.push(link);
}
*/
