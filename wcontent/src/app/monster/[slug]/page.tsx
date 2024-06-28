"use client";
import { Back_btn } from "@/components/btn_controller";
import {
  M_pannel,
  M_film_holder,
  M_Icon_holder,
  M_film_notFound,
} from "@/components/m_pannel";
import { useRouter } from "next/navigation";

export default function Page({ params }: { params: { slug: string } }) {
  // main holder

  if (params.slug !== "mike") {
    return <div className="text-white">NO FOUND</div>;
  }

  return (
    <div className="flex justify-between">
      <div></div> {/*Spacer*/}
      <div className="w-[330px] h-full bg-white rounded-md flex justify-center md:w-[600px]">
        {/*topbottom divider */}
        <div>
          <section className="flex justify-center">
            {/* video section */}
            <div className="flex justify-center items-center bg-amber-600 w-full h-full rounded-lg overflow lg:w-[1000px] xl:w-[1300px]">
              <div className="">
                <div className="grid grid-cols-1 gap-10 mt-10 lg:grid-cols-2 ">
                  <M_film_holder></M_film_holder>
                  <M_film_notFound></M_film_notFound>
                  <M_film_notFound></M_film_notFound>
                  <M_film_notFound></M_film_notFound>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
      <div></div> {/*Spacer*/}
    </div>
  );
}

const stackPCver = () => {
  <div className="flex justify-between scroll-auto">
    {/* spacer*/}
    <div></div>
    {/* spacer*/}
    {/*
  width: 600px;
  height: 350px;
   */}
    {/* thiss will be the main bg  */}
    <div className="w-[1300px] h-[1400px] bg-white rounded-md">
      {/* top bottom seperator  */}
      <div className="my-5">
        <section className="flex justify-center">
          {/*holder*/}
          <div className="bg-green-400 w-[1000px] h-[300px] flex items-center justify-center rounded-lg">
            <div className="flex space-x-10">
              <div className="w-[250px] h-[250px] rounded-lg overflow-clip">
                <M_Icon_holder></M_Icon_holder>
              </div>
              <div className="bg-amber-200 w-[500px] h-[250px] rounded-lg">
                <div className="my-5 mx-5">
                  <p className="text-lg">{"huhuh"}</p>
                  <p>Details</p>
                  <p className="flex justify-end">★★★★★</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="my-10"></div>
        <section className="flex justify-center">
          {/* video section */}
          <div className="w-[1000px] h-full bg-amber-600 rounded-lg overflow ">
            <div className="flex justify-center ">
              <div className="grid grid-cols-2 gap-10 mt-10 mb-10">
                <M_film_holder></M_film_holder>
                <M_film_holder></M_film_holder>
                <M_film_holder></M_film_holder>
                <M_film_holder></M_film_holder>
              </div>
            </div>
          </div>
        </section>
        ;
      </div>
    </div>
    {/* spacer*/}
    <div></div>
    {/* spacer*/}
  </div>;
};

/*
<div className="block md:hidden">SM</div>
<div className="hidden md:block lg:hidden">MD</div>
<div className="hidden lg:block xl:hidden">LG</div>
<div className="hidden xl:block 2xl:hidden">XL</div>
<div className="hidden 2xl:block">2XL</div>
*/
const stack = () => {
  {
    /* video BG  */
  }
  <section className="flex justify-center">
    {/* video section */}
    <div className="w-[1000px] h-[1000px] bg-amber-600">
      <div className="flex justify-center ">
        <div className="grid grid-cols-2">
          <M_film_holder></M_film_holder>
          <M_film_holder></M_film_holder>
          <M_film_holder></M_film_holder>
          <M_film_holder></M_film_holder>
        </div>
      </div>
    </div>
  </section>;
};
