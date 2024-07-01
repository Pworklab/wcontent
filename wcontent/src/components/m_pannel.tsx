import React from "react";
import { useRouter, usePathname } from "next/navigation";

interface M_pannelProps {
  name: string;
  descript?: string;
}

export function M_pannel({ name, descript }: M_pannelProps) {
  const router = useRouter();

  const link = "monster/" + name;

  return (
    <div>
      <button onClick={() => router.push(link)}>
        <div className="w-40 h-40 bg-white relative">
          <div className="flex flex-col">
            <p className="text-black flex justify-center">{name}</p>
          </div>
        </div>
      </button>
    </div>
  );
}

// origin
// 420 X 420 // 24 framerate use this later
//public\testFilm\film.webm

export const M_Icon_holder = () => {
  return (
    <img
      src="/testPhoto/smiler.png"
      className="object-fill w-[330px] h-[330px] md:w-[420px] md:h-[420px]"
      alt="Content Warning"
    />
  );
};

interface M_filmProps {
  path: string;
}

export const M_film_holder = () => {
  return (
    <video className="object-cover" controls>
      <source src="/testFilm/film.webm" />
      Your browser does not support the video tag.
    </video>
  );
};

export const M_film_notFound = ({ path }: M_filmProps) => {
  const onErrorpath = "/testFilm/notFound.gif";

  return (
    <img
      src={path}
      className="object-fill w-[330px] h-[330px] md:w-[420px] md:h-[420px]"
      alt="Content Warning"
      onError={(e) => {
        console.log("im not foundeee");
        e.currentTarget.src = "/testFilm/notFound.gif";
      }}
    />
  );
};

/*
<img src={imgPath} alt='sample_img' width='100%' height='auto' onError={(e) => { e.currentTarget.src = dummy_img }} /> 
*/

export default M_pannel;
