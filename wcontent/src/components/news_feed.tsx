import { ToExternalPathBtn } from "./btn_controller";
import { ReturnIndexPathBtn } from "./btn_controller";
import Script from "next/script";
import { FetchNews } from "./server_side";
import { Debugger_Btn } from "./btn_controller";
import { parseArgs } from "util";

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

interface feedViesProps {
  aaa_index: number;
}

// I think when handling with async it's better to use it as a whole function rather than getting asyn object to non async object

const formattedDate = (timestamp: number) => {
  return new Date(timestamp * 1000).toLocaleDateString();
};

const fetchNews = async (): Promise<Data> => {
  const result = await fetch("http://localhost:3000/api/news");
  return result.json();
};

/////// パラメータの渡し方は｛｝　で囲め！！
export default async function NewsFeed({ aaa_index }) {
  const { appnews } = await fetchNews();

  if (appnews.newsitems.length < 0) {
    return <>Not Found</>;
  }
  console.log("me is", aaa_index);
  const firstNewsItem = appnews.newsitems[0];
  return (
    <div>
      <div className="box-content size-60 bg-gray-200">
        <div className="flex flex-col">
          <div>
            <p className="text-black flex justify-center">
              {firstNewsItem.title}
            </p>
            <article className="text-wrap overflow-y-scroll overflow-x-hidden h-40 auto w-auto bg-amber-200">
              <p className="break-words">{firstNewsItem.contents}</p>
            </article>
          </div>
          <div className="flex flex-row mx-2 justify-between">
            <p className="bg-black text-yellow-400">
              {formattedDate(firstNewsItem.date)}
            </p>
            <ToExternalPathBtn link={firstNewsItem.url}></ToExternalPathBtn>
          </div>
        </div>
      </div>
    </div>
  );
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
