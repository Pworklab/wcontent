import { useState } from "react";

import { PrepNewsItem } from "./server_side";
import { P } from "./server_side";

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

/*
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
 */

const formattedDate = (timestamp: number) => {
  return new Date(timestamp * 1000).toLocaleDateString();
};

//PrepNewsItem
export function FeedViews() {
  P.then((data) => {
    console.log("aa", data[0].title);
  });

  /*
  //初期化は空が良い
  console.log("called");
  let newsItems: Newsitem[] = null;
  const [title, setTitle] = useState("Title"); // this works cause it is setting 'null' text and change it after it got change last time it error cause we are calling a null class cause we can't set a default one cause we are still fetching it
  const [content, setContent] = useState("Content");
  const [date, setDate] = useState(0);
  const [url, setUrl] = useState("link");

  //const [newsItems, setNewsItem] = useState(null);
  //dont' use UseState inside !!! it will cause loop
  function callOnce() {
    console.log("is this called multiple times?");
    PrepNewsItem().then((data) => {
      newsItems = data;
      //if (a !== newsItems[0].contents) {
      setTitle(newsItems[0].contents);
      setContent(newsItems[0].contents);
      setDate(newsItems[0].date);
      setUrl(newsItems[0].url);
      // }
      console.log("is this called multiple times?", title);
    });
  }
  callOnce();
  return (
    <div>
      <div className="text-white ">{title}</div>
    </div>
  );

  */
}

// 詳細入れる要素を後で決める
export default FeedViews;

/*
  interface feedViesProps {
    aaa_index: number;
  }
  return (
    <div>
      <NewsFeed aaa_index={0}></NewsFeed>
    </div>
  );
*/
