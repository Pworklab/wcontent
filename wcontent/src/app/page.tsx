"use client";
import Image from "next/image";
import { Header_btn } from "@/components/btn_controller";
import Script from "next/script";
import { error } from "console";
import axios from "axios";
export default function Home() {
  // for practice use only !!

  interface GameNewsDetails {
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

  interface APIData {
    _id: string;
    content: string;
  }

  interface APIDataB {
    slip: APIDatadetails;
  }

  interface APIDatadetails {
    id: number;
    advice: string;
  }

  async function APIA() {
    const result = await fetch("https://api.quotable.io/quotes/random");
    const json = (await result.json()) as APIData[];
    console.log(json[0].content);
  }
  async function APIB() {
    const result = await fetch("https://api.adviceslip.com/advice");
    const json = (await result.json()) as APIDataB;
    const slip: APIDatadetails = json.slip;
    console.log(slip.advice);
  }

  return (
    <main className="bg-fullscreen">
      <div className="text-white">hello underworld</div>
      <Header_btn title={"toHat"} link={"hat"}></Header_btn>
      <Header_btn title={"toMonster"} link={"monster"}></Header_btn>
      <div>
        <button className="text-white" onClick={async () => APIA()}>
          AAAA
        </button>
      </div>
      <div>
        <button className="text-white" onClick={async () => APIB()}>
          BBBB
        </button>
      </div>
      <div className="text-white">hey there news here!!!</div>
    </main>
  );
}

//https://api.adviceslip.com/advice

/*
the fetch that I sample that I will use 
export function MyButton({ title, debugbtn }: ButtonPros) {
  const onButtonClick = async () => {
    const result = await fetch('https://api.quotable.io/quotes/random');
    const json = (await result.json()) as APIData[];
    void debugbtn(json[0].content, json[0].author);
  };
*/

//http://api.steampowered.com/ISteamNews/GetNewsForApp/v0002/?appid=2881650&count=1&maxlength=1000&format=json
/*
appid
AppID of the game you want the news of.
count
How many news enties you want to get returned.
maxlength
Maximum length of each news entry.
format
Output format. json (default), xml or vdf.
*/
//

// memo do this later
/**
 * 
 * 

  //omit
  //pick
  // t
  // as Array<APIData>
  // as APIData[]
 */
