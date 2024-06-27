"use client";
import { Back_btn } from "@/components/btn_controller";
import M_pannel from "@/components/m_pannel";
import { useRouter } from "next/navigation";

export default function Page({ params }: { params: { slug: string } }) {
  // main holder
  return (
    <div className="flex justify-between scroll-auto">
      {/* spacer*/}
      <div></div>
      {/* spacer*/}

      {/* thiss will be the main bg  */}
      <div className="monsterMainBorderSize bg-white">
        {/* top bottom seperator  */}
        <div>
          {/* Icon and description make this row when sm */}
          <div className="flex justify-between monsterDetailBorderSize bg-green-200  flex-col sm:flex-row md:flex-row ml:flex-col">
            {/* spacer*/}
            <div></div>
            {/* spacer*/}

            {/*icon*/}
            <div className="monsterDetailIconSize my-10 bg-black"></div>

            {/*description*/}
            <div className="monsterDetailDescriptionSize mt-5 bg-blue-200"></div>
            {/* spacer*/}
            <div></div>
            {/* spacer*/}
          </div>

          {/* video BG  */}
          <section>
            {/* video section */}
            <div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </section>
        </div>
      </div>

      {/* spacer*/}
      <div></div>
      {/* spacer*/}
    </div>
  );
}
// update it later

//  return <div className="text-white">My Post: {params.slug}</div>;

/*
.newsFeedSize {
  width: 250px;
  height: 60px;
}
  */

//.monsterDetailBoderSize
