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
/*
export function ToExternalPath_btn(link: string) {
  function a() {
    const router = useRouter();
    const yes = window.confirm(
      "別のウェブサイトに移動しようとしています。このまま進んでもよろしいですか？"
    );
    if (yes) {
      router.push(link);
    } else {
      // do nothing
    }
  }

  return (
    <button onClick={a} className="bg-green-500">
      check for more details
    </button>
  );
}
*/

interface path {
  link: string;
}
//function Header_btn({ title, link }: HeaderBtnProps) {
export function ToExternalPathBtn({ link }: path) {
  const router = useRouter();

  const handleClick = () => {
    const yes = window.confirm(
      "別のウェブサイトに移動しようとしています。このまま進んでもよろしいですか？"
    );
    if (yes) {
      router.push(link);
    }
  };

  return (
    <button onClick={handleClick} className="bg-green-500">
      check for more details
    </button>
  );
}

export function OpenNewTab_btn(url: string) {}

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
