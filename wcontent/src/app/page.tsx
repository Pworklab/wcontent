"use client"
import Image from "next/image";
import { Header_btn } from "@/components/btn_controller";
export default function Home() 
{
  return (
   <main className="bg-fullscreen">
    <div className="text-white">hello underworld</div>
    <Header_btn title={"toHat"} link={"hat"}></Header_btn>
    <Header_btn title={"toMonster"} link={"monster"}></Header_btn>
    </main>
    );
}