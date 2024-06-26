"use client";
import { headers } from "next/headers";
import { useRouter, usePathname } from "next/navigation";
import path from "path";
import { title } from "process";
import { useState } from "react";
import NewsFeed from "./news_feed";
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

export function Debugger_Btn() {
  const dbg_handle = () => {
    console.log("reset");
  };

  return (
    <button onClick={dbg_handle} className="bg-green-500">
      debug Button
    </button>
  );
}

export function ReturnIndexPathBtn(T, title: string) {
  return (
    <button onClick={T} className="bg-green-500">
      {title}
    </button>
  );
}

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

//-------------------- for test purpose -----------------------------

/*
import { fetchNews } from "./news_feed";

interface Data {
  appnews: Appnews;
}

interface Appnews {
  appid: number;
  newsitems: Newsitem[];
  count: number;
}

interface Newsitem {
  gid: string;
  title: string;
  url: string;
  is_external_url: boolean;
  author: string;
  contents: string;
  feedlabel: string;
  date: number;
  feedname: string;
  feed_type: number;
  appid: number;
  tags: string[];
}
*/

/*
// always make first letter big or it won't get known
import { fetchNewsTest } from "./news_feed";
export function CheckWebthingy() {
  const tmp: Promise<Data> = fetchNewsTest();
  let m_data: Data;

  const handleClick = () => {
    fetchNewsTest()
      .then((data) => {
        m_data = data;
        console.log("とったどぉ", m_data.appnews.newsitems[0].contents);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  return (
    <div>
      <button onClick={handleClick} className="text-white">
        check if I can get called
      </button>
    </div>
  );
}

//-------------------- for test purpose -----------------------------
*/
