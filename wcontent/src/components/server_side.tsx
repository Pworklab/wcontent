import { createContext, useContext } from "react";
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

export const FetchNews = async (): Promise<Data> => {
  const result = await fetch("http://localhost:3000/api/news");
  return result.json();
};

/*
 it will cause loop
  function callOnce() {
    console.log("is this called multiple times?");
    PrepNewsItem().then((data) => {
      newsItems = data;
      console.log("is this called multiple times?");
    });
  }
*/

export async function PrepNewsItem() {
  const tmp = await FetchNews();
  const NewsItems: Newsitem[] = tmp.appnews.newsitems;
  return NewsItems;
}
export const P = PrepNewsItem();

//const MadeNews = createContext(PrepNewsItem());
//export const useNews = useContext(MadeNews);
