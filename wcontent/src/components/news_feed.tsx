// import { useState, useEffect } from "react";
// import { ToExternalPathBtn } from "./btn_controller";
// import { P } from "./server_side";
import { useEffect, useState } from "react";
import useSWR, { Fetcher } from "swr";
import { ToExternalPathBtn } from "./btn_controller";

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
const formattedDate = (timestamp: number) => {
  return new Date(timestamp * 1000).toLocaleDateString();
};

//この1行凄いシンプルだけど分かりやすい
export const fetcher = (url: string) => fetch(url).then((res) => res.json());

/////// パラメータの渡し方は｛｝　で囲め！！
export default function NewsFeed({}) {
  const [selected, setSelected] = useState<number>(0);
  // const [data, setData] = useState<Newsitem>();
  const { data, error, isLoading } = useSWR<Data>("/api/news", fetcher);

  if (isLoading) {
    return <div className="loading loading-relative"></div>;
  }
  if (error) {
    return <>Error ...</>;
  }
  return (
    <>
      <select
        onChange={(e) => {
          const val = Number(e.target.value);
          setSelected(val);
        }}
      >
        {Array.from(Array(data.appnews.count).keys()).map((val) => (
          <option value={val}>{val + 1}</option>
        ))}
      </select>
      <div className="box-content newsFeedSize bg-gray-200">
        <div className="flex flex-col">
          <div>
            <p className="text-black flex h-6 overflow-clip ">
              {data.appnews.newsitems[selected].title}
            </p>
            <article className="text-ellipsis  overflow-x-hidden h-40 auto w-auto bg-amber-200">
              <p className="break-words">
                {data.appnews.newsitems[selected].contents}
              </p>
            </article>
          </div>
          <div className="flex flex-row mx-2 justify-between">
            <p className="bg-black text-yellow-400">
              {formattedDate(data.appnews.newsitems[selected].date)}
            </p>
            <ToExternalPathBtn
              link={data.appnews.newsitems[selected].url}
            ></ToExternalPathBtn>
          </div>
        </div>
      </div>
    </>
  );
  // const [allNews, setAllNews] = useState<Newsitem[]>(null);
  // const [targetPage, setTargetPage] = useState(0);
  // useEffect(() => {
  //   P.then((value) => {
  //     setAllNews(value);
  //   });
  // }, []);

  // if (allNews === null) {
  //   return (
  //     <div>
  //       <div className="box box2">
  //         <div className="loading loading-relative"></div>
  //       </div>
  //     </div>
  //   );
  // }
  // const shownPage = allNews[targetPage];
  // return (
  //   <div>
  //     <div className="flex gap-2">
  //       <button onClick={() => setTargetPage(0)} className="bg-yellow-200">
  //         page 1
  //       </button>
  //       <button onClick={() => setTargetPage(1)} className="bg-yellow-400">
  //         page 2
  //       </button>
  //       <button onClick={() => setTargetPage(2)} className="bg-yellow-500">
  //         page 3
  //       </button>
  //     </div>
  //     <div className="box-content newsFeedSize bg-gray-200">
  //       <div className="flex flex-col">
  //         <div>
  //           <p className="text-black flex h-6 overflow-clip ">
  //             {shownPage.title}
  //           </p>
  //           <article className="text-ellipsis  overflow-x-hidden h-40 auto w-auto bg-amber-200">
  //             <p className="break-words">{shownPage.contents}</p>
  //           </article>
  //         </div>
  //         <div className="flex flex-row mx-2 justify-between">
  //           <p className="bg-black text-yellow-400">
  //             {formattedDate(shownPage.date)}
  //           </p>
  //           <ToExternalPathBtn link={shownPage.url}></ToExternalPathBtn>
  //         </div>
  //       </div>
  //     </div>
  // </div>
  // );
}
/*
// how to pre-render this ...
export default async function NewsFeed() {
  let a_tmp: string = "";
  let newsItems: Newsitem[];

  function a(callback) {
    console.log("AA");
    const tmp: Promise<Data> = FetchNews();
    tmp.then((data) => {
      // I'm only taking 3 items from API
      if (data.appnews.newsitems.length <= 3) {
        console.log(data.appnews.newsitems.length);
        newsItems = data.appnews.newsitems;
      } else {
        console.log("out of index");
      }
      callback();
    });
  }
  a(b);
  function b() {
    console.log("bb");
    console.log(newsItems[0].contents);
  }
  return (
    <div>
      <div className="box-content size-60 bg-gray-200">
        <div className="flex flex-col">
          <div className="flex-col space-20">
            <Debugger_Btn></Debugger_Btn>
            <p className="text-black flex justify-center">{"title"}</p>
            <article className="text-wrap overflow-y-scroll overflow-x-hidden h-40 auto w-auto bg-amber-200">
              <p className="break-words">{"content"}</p>
            </article>
            <div className="flex flex-row mx-2 justify-between ">
              <p className="bg-black text-yellow-400">
                {"formattedDate(firstNewsItem.date)"}
              </p>
              <ToExternalPathBtn link={"firstNewsItem.url"}></ToExternalPathBtn>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
// call once?
/*
  return (
    <div>
      <div className="box-content size-60 bg-gray-200">
        <div className="flex flex-col">
          <div className="flex-col space-20">
            <Debugger_Btn></Debugger_Btn>
            <p className="text-black flex justify-center">{"title"}</p>
            <article className="text-wrap overflow-y-scroll overflow-x-hidden h-40 auto w-auto bg-amber-200">
              <p className="break-words">{"content"}</p>
            </article>
            <div className="flex flex-row mx-2 justify-between ">
              <p className="bg-black text-yellow-400">
                {"formattedDate(firstNewsItem.date)"}
              </p>
              <ToExternalPathBtn link={"firstNewsItem.url"}></ToExternalPathBtn>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
  */
