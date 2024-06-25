import { useState } from "react";
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

// I think when handling with async it's better to use it as a whole function rather than getting asyn object to non async object

const fetchNews = async (): Promise<Data> => {
  const result = await fetch("http://localhost:3000/api/news");
  return result.json();
};

const formattedDate = (timestamp: number) => {
  return new Date(timestamp * 1000).toLocaleDateString();
};

export default async function NewsFeed() {
  const { appnews } = await fetchNews();

  if (appnews.newsitems.length < 0) {
    return <>Not Found</>;
  }
  const firstNewsItem = appnews.newsitems[0];
  // can make to able to change got news but don't want to turn this to client again so far this is good
  return (
    <div>
      <div className="box-content size-60 bg-gray-200">
        <div className="flex flex-col">
          <div className="flex-col space-20">
            <p className="text-black flex justify-center">
              {firstNewsItem.title}
            </p>
            <article className="text-wrap overflow-y-scroll overflow-x-hidden h-40 auto w-auto bg-amber-200">
              <p className="break-words">{firstNewsItem.contents}</p>
            </article>
            <div className="flex flex-row mx-2 justify-between ">
              <p className="bg-black text-yellow-400">
                {formattedDate(firstNewsItem.date)}
              </p>
              <ToExternalPathBtn link={firstNewsItem.url}></ToExternalPathBtn>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
