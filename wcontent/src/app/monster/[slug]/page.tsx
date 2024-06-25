"use client";
import { Back_btn } from "@/components/btn_controller";
import M_pannel from "@/components/m_pannel";
import { useRouter } from "next/navigation";

export default function Page({ params }: { params: { slug: string } }) {
  return <div className="text-white">My Post: {params.slug}</div>;
}
// update it later
